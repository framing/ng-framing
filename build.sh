#!/usr/bin/env bash

set -e -o pipefail

cd `dirname $0`

PACKAGES=(
  ng-core
  ng-security
  ng-ui)

TSC=tsc
TSLINT=tslint
RSYNC=rsync
GULP=gulp
NODE=node
BUILD_ALL=true
VERSION_PREFIX=$(node -p "require('./package.json').version")
VERSION_SUFFIX="-$(git log --oneline -1 | awk '{print $1}')"
BUILD_EXAMPLES=true

for ARG in "$@"; do
  case "$ARG" in
    --packages=*)
      PACKAGES_STR=${ARG#--packages=}
      PACKAGES=( ${PACKAGES_STR//,/ } )
      BUILD_ALL=false
      ;;
    --publish=*)
      VERSION_SUFFIX=""
      PUBLISH_VERSION=${ARG#--publish=}
      if [[ ${VERSION_PREFIX} != ${PUBLISH_VERSION} ]]; then
        echo "PUBLISH VERSION ${PUBLISH_VERSION} must match package.json version ${VERSION_PREFIX}";
        exit 1
      fi
      ;;
    *)
      echo "Unknown option $ARG."
      exit 1
      ;;
  esac
done

./check-environment.sh --verbose

VERSION="${VERSION_PREFIX}${VERSION_SUFFIX}"
echo "====== BUILDING Framing ${VERSION} ======"

if [[ ${BUILD_ALL} == true ]]; then
  rm -rf ./dist/all
  # mkdir -p ./dist/all

  # build e2e, benchmarks, etc

  rm -rf ./dist/packages-dist
fi

mkdir -p ./dist/packages-dist

for PACKAGE in ${PACKAGES[@]}
do
  PWD=`pwd`
  ROOTDIR=${PWD}/modules/@framing
  SRCDIR=${PWD}/modules/@framing/${PACKAGE}
  DESTDIR=${PWD}/dist/packages-dist/${PACKAGE}
  DEST_MODULE=${DESTDIR}/@framing

  rm -rf ${DESTDIR}
  mkdir -p ${DESTDIR}

  if [[ ${PACKAGE} == 'ng-tasknas-framers' ]]; then

    echo "====== [${PACKAGE}]: RSYNC: $RSYNC -ru ${SRCDIR}/* ${DESTDIR} --include='*/' --include='*.ts' --include='*.html' --include='*.css' --include='*.scss' --include='*.less' --exclude='*'"
    $RSYNC -ru ${SRCDIR}/* ${DESTDIR} --include='*/' --include='*.ts' --include='*.html' --include='*.css' --include='*.scss' --include='*.less' --exclude='*'

  else

    echo "====== [${PACKAGE}]: COMPILING: ${TSC} -p ${SRCDIR}/tsconfig-build.json"
    $TSC -p ${SRCDIR}/tsconfig-build.json

    echo "====== [${PACKAGE}]: LINTING: $TSLINT -c ./tslint.json --type-check --project ${SRCDIR}/tsconfig-build.json ${SRCDIR}/**/*.ts"
    $TSLINT -c ./tslint.json --type-check --project ${SRCDIR}/tsconfig-build.json ${SRCDIR}/**/*.ts

  fi

  cp ${SRCDIR}/package.json ${DESTDIR}/
  cp ${PWD}/LICENSE ${DESTDIR}/
  cp ${PWD}/modules/@framing/README.md ${DESTDIR}/

  (
    echo "====== VERSION: Updating version references"
    cd ${DESTDIR}
    echo "====== EXECUTE: perl -p -i -e \"s/0\.0\.0\-PLACEHOLDER/${VERSION}/g\" $""(grep -ril 0\.0\.0\-PLACEHOLDER .)"
    perl -p -i -e "s/0\.0\.0\-PLACEHOLDER/${VERSION}/g" $(grep -ril 0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
  )
done

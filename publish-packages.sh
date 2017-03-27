#!/usr/bin/env bash

set -u -e -o pipefail

readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}

VERSION_PREFIX=$(node -p "require('./package.json').version")
PUBLISH_VERSION=""

PACKAGES=(
  ng-core
  ng-security
  ng-tasknas-framers
  ng-ui)

for ARG in "$@"; do
  case "$ARG" in
    --packages=*)
      PACKAGES_STR=${ARG#--packages=}
      PACKAGES=( ${PACKAGES_STR//,/ } )
      ;;
    --publish=*)
      PUBLISH_VERSION=${ARG#--publish=}
      if [[ ${VERSION_PREFIX} != ${PUBLISH_VERSION} ]]; then
        echo "--publish=VERSION ${PUBLISH_VERSION} must match package.json version ${VERSION_PREFIX}";
        exit 1
      fi
      ;;
    *)
      echo "Unknown option $ARG."
      exit 1
      ;;
  esac
done

if [[ "${PUBLISH_VERSION}" == "" ]]
then
  echo "--publish=VERSION is required"
  exit 1
fi

./build.sh $1

for PACKAGE in ${PACKAGES[@]}
do
  DESTDIR=./dist/packages-dist/${PACKAGE}
  echo "====== PUBLISHING: ${DESTDIR} ====="
  npm publish ${DESTDIR} --access public
done

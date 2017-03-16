#!/usr/bin/env bash

set -e -o pipefail

cd `dirname $0`

VERSION=$1

PACKAGES=(
  ng-core
  ng-security
  ng-ui)

if [[ "${VERSION}" == "" ]]
then
  echo "Version number required"
  exit 1
fi

./build.sh $1 $2 $3 $4

for ARG in "$@"; do
  case "$ARG" in
    --packages=*)
      PACKAGES_STR=${ARG#--packages=}
      PACKAGES=( ${PACKAGES_STR//,/ } )
      ;;
    --publish=*)
      ;;
    *)
      echo "Unknown option $ARG."
      exit 1
      ;;
  esac
done

for PACKAGE in ${PACKAGES[@]}
do
  DESTDIR=./dist/packages-dist/${PACKAGE}
  echo "====== PUBLISHING: ${DESTDIR} ====="
  npm publish ${DESTDIR} --access public
done

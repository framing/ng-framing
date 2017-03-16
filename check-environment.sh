NODE=node

echo "====== CHECKING ENVIRONMENT ======"
${NODE} ./tools/check-environment.js $1
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi

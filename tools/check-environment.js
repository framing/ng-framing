/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   !!!                                                                                   !!!
   !!!  This file is special in that it must be able to execute with wrong Node version  !!!
   !!!  or even when node_modules are missing.                                           !!!
   !!!                                                                                   !!!
   !!!  Do not depend on Node4+ features or presence of npm packages here.               !!!
   !!!                                                                                   !!!
   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

'use strict';

var exec = require('child_process').exec;
var checkNodeModules;
var semver;
var issues = [];

// coarse Node version check
if (+process.version[1] < 5) {
  issues.push('Framing build currently requires Node 5+. Use nvm to update your node version.');
}

try {
  semver = require('semver');
} catch (e) {
  issues.push('Looks like you are missing some npm dependencies. Run: npm install');
}

if (issues.length) {
  printWarning(issues);
  console.error(
      'Your environment doesn\'t provide the prerequisite dependencies.\n' +
      'Please fix the issues listed above and then rerun the gulp command.');
  process.exit(1);
}

if (require.main === module) {
  // we are running this script directly so just run checkEnvironment against the main angular
  // package.json
  var engines = require(__dirname + '/../package.json').engines;
  checkEnvironment({
    requiredNodeVersion: engines.node,
    requiredNpmVersion: engines.npm,
    requiredYarnVersion: engines.yarn
  });
}

function checkEnvironment(reqs) {
  exec('npm --version', function(npmErr, npmStdout) {
    exec('yarn --version', function(yarnErr, yarnStdout) {
      var foundNodeVersion = process.version;
      var foundNpmVersion = semver.clean(npmStdout);
      var foundYarnVersion = !yarnErr && semver.clean(yarnStdout);

      if (process.argv.includes('--verbose')) {
        console.info('Node version ' + foundNodeVersion);
        console.info('Npm version ' + foundNpmVersion);
        console.info('Yarn version ' + foundYarnVersion);
      }

      var issues = [];

      if (!semver.satisfies(foundNodeVersion, reqs.requiredNodeVersion)) {
        issues.push(
            'You are running unsupported node version. Found: ' + foundNodeVersion + ' Expected: ' +
            reqs.requiredNodeVersion + '. Use nvm to update your node version.');
      }

      if (!semver.satisfies(foundNpmVersion, reqs.requiredNpmVersion)) {
        issues.push(
            'You are running unsupported npm version. Found: ' + foundNpmVersion + ' Expected: ' +
            reqs.requiredNpmVersion + '. Run: npm update -g npm');
      }

      if (yarnErr) {
        issues.push(
            'You don\'t have yarn globally installed. This is required if you want to work on ' +
            'certain areas, such as `aio/` and `integration/`. Installation instructions: ' +
            'https://yarnpkg.com/lang/en/docs/install/');
      } else if (!semver.satisfies(foundYarnVersion, reqs.requiredYarnVersion)) {
        issues.push(
            'You are running unsupported yarn version. Found: ' + foundYarnVersion + ' Expected: ' +
            reqs.requiredYarnVersion + '. This is required if you want to work on ' +
            'certain areas, such as `aio/` and `integration/`. See: ' +
            'https://yarnpkg.com/lang/en/docs/install/');
      }

      printWarning(issues);
    })
  });
}

function printWarning(issues) {
  if (!issues.length) return;

  console.warn('');
  console.warn('!'.repeat(110));
  console.warn('!!!  Your environment is not in a good shape. Following issues were found:');
  issues.forEach(function(issue) { console.warn('!!!   - ' + issue); });
  console.warn('!'.repeat(110));
  console.warn('');

  process.exit(1);
}

const engines = require('../package.json').engines;
checkEnvironment({
  requiredNodeVersion: engines.node,
  requiredNpmVersion: engines.npm,
  requiredYarnVersion: engines.yarn
});

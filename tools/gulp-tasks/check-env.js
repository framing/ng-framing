module.exports = (gulp) => (done) => {
  const path = require('path');
  const childProcess = require('child_process');
  childProcess.exec(path.join(__dirname, '../../check-environment.sh --verbose'), function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
};

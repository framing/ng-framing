'use strict';

// THIS CHECK SHOULD BE THE FIRST THING IN THIS FILE
// This is to ensure that we catch env issues before we error while requiring other dependencies.
require('./tools/check-environment');

const gulp = require('gulp');

// See `tools/gulp-tasks/README.md` for information about task loading.
function loadTask(fileName, taskName) {
  const taskModule = require('./tools/gulp-tasks/' + fileName);
  const task = taskName ? taskModule[taskName] : taskModule;
  return task(gulp);
}

gulp.task('default', ['check-env']);
gulp.task('check-env', loadTask('check-env'));

gulp.task('build', ['check-env'], loadTask('build'));
gulp.task('lint', ['tslint']);
gulp.task('tslint', ['check-env'], loadTask('lint'));

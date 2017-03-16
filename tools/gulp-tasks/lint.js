// Check the coding standards and programming errors
module.exports = (gulp) => () => {
  const tslint = require('gulp-tslint');
  // Built-in rules are at
  // https://palantir.github.io/tslint/rules/
  const tslintConfig = require('../../tslint.json');
  return gulp
      .src([
        './modules/**/*.ts',
        './tools/**/*.ts',
        './*.ts',

        // Ignore generated files due to lack of copyright header
        '!**/*.d.ts',
      ])
      .pipe(tslint({
        tslint: require('tslint').default,
        configuration: tslintConfig,
        formatter: 'prose',
      }))
      .pipe(tslint.report({emitError: true}));
};

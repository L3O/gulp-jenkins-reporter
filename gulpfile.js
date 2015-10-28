var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  jscs = require('gulp-jscs'),
  files = {
    javascript: ['*.js', '**/*.js', '!node_modules/**']
  };

gulp.task('lint-jshint', function () {
  return gulp.src(files.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('lint-jscs', function () {
  return gulp.src(files.javascript)
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('lint', ['lint-jshint', 'lint-jscs']);
gulp.task('default', ['lint']);

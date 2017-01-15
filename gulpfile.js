/* eslint import/no-unresolved: 2*/
const gulp = require('gulp');
const webpack = require('webpack-stream');
const rename = require('gulp-rename');

gulp.task('bundle-app', function () {
  return gulp.src('src/string-class.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(rename({
      basename: "bundle"
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['bundle-app']);
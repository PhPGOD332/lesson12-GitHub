const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

gulp.task('hello', function(done) {
  console.log('Привет, Мир');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('minify_css_task',[other_task], function() {
  return gulp.src('css/mehr.css')
    .pipe(cleanCSS({debug: true}, function(details) {
      compatibility: 'ie8';
      console.log('Original size of '+ details.name + ': ' + details.stats.originalSize);
      console.log('Minified size of '+ details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
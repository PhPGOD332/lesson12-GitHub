const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return gulp.src(".sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;

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
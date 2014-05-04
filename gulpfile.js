var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('src/scss/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(gulp.dest('css/'));
})

gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('dev-server', function(next) {
  var connect = require('connect'),
    server = connect();
  server.use(connect.static('./')).listen(process.env.PORT || 3000, next);
});

gulp.task('default', ['sass', 'watch', 'dev-server']);
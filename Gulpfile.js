var gulp          = require('gulp'),
    sass          = require('gulp-sass');

// Styles.
buildStyles = (done) => {
  gulp.src('sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
  done();
} 

gulp.task('styles', buildStyles );

// Watch.
gulp.task('default', function () {
  gulp.watch('sass/**/*.scss', gulp.series(['styles']));
});

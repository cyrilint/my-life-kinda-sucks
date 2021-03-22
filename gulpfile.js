const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('scss-styles/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
    gulp.watch('scss-styles/**/*.scss', gulp.parallel('scss'))
})
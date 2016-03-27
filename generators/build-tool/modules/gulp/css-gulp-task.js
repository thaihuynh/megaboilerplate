gulp.task('css', function() {
  return gulp.src('public/css/main.css')
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(gulpif(argv.production, csso()))
    .pipe(gulp.dest('public/css'));
});

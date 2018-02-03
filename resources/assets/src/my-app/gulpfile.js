var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('copy-dir', function(){
    return gulp.src(['./dist/**/*']).pipe(gulp.dest('./../../../../public/dist'));
});

gulp.task('default', [ 'copy-dir' ]);

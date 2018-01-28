var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean-dir', function () {
    return gulp.src('./../../../../public/dist', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('copy-dir', function(){
    return gulp.src(['./dist/**/*']).pipe(gulp.dest('./../../../../public/dist'));
});

gulp.task('default', [  'clean-dir', 'copy-dir' ]);
var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');


gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './app/bower-components/'
    };


    return gulp.src('./app/index.html')
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(['./app/js/**/*.js', './app/css/**/*.css'], {read: false}), {ignorePath: '/app'}))
        .pipe(gulp.dest('./app'))

});

gulp.task('serve', function(){
    browserSync.init('./app/**/*.*',{
        server:{
            baseDir:'./app',
            middleware: [historyApiFallback()]
        }
    });
});

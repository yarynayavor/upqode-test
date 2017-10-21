var gulp = require('gulp');
const jshint = require('gulp-jshint');
const autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var path = require('path');
var pump = require('pump');
var del = require('delete');
var browserSync = require('browser-sync').create();
var gulpSequence = require('gulp-sequence');
var cssbeautify = require('gulp-cssbeautify');

//added gulp-jshint task
gulp.task('jshint', function() {
  return gulp.src('dev/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//added gulp-sass task which convert sass to css
gulp.task('sass', function () {
  return gulp.src('dev/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false  
        }))
    .pipe(cssbeautify())
    .pipe(gulp.dest('production/css'))
    .pipe(browserSync.stream())
});


//delete production folder if excist 
gulp.task('del', function () {
	del.sync(['production']);
});

//added copy-html task which copy dev/index.html to production
gulp.task('copy-html',function () {
	return gulp.src('dev/index.html')
		.pipe(gulp.dest('production'))
        .pipe(browserSync.stream())
});

//added copy-images task which copy dev/img/*.png to production
gulp.task('copy-images',function () {
	return gulp.src('dev/img/*.png')
		.pipe(gulp.dest('production/img'))
        .pipe(browserSync.stream())
});

//added copy-js task which copy dev/js/*.js to production
gulp.task('copy-js',function () {
	return gulp.src('dev/js/*.js')
		.pipe(gulp.dest('production/js'))
        .pipe(browserSync.stream())
});


// task livereload(use browser-sync)
gulp.task('livereload', function () {
	browserSync.init({
        server: {
            baseDir: 'production'
        }
    });
	gulp.watch('dev/sass/*.scss',['sass']);
    gulp.watch("dev/*.html",['copy-html']).on('change', browserSync.reload);
    gulp.watch("dev/js/*.js",['copy-js']).on('change', browserSync.reload);
});

// task server which run watches for sass,html and livereload
gulp.task('server', ['copy-html','copy-images','copy-js','sass','livereload']);  

//task production
gulp.task('production', gulpSequence('del','copy-html','copy-images','copy-js','sass'));

//task default whick run task server
gulp.task('default',['server']);
var 
	gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	imagemin = require('gulp-imagemin'),
	babel = require('gulp-babel');


gulp.task('css', function () {
	sass('./src/scss/CV*.scss',{style:'compressed'})
	.pipe(gulp.dest('dist/css'));

});


gulp.task('js', function () {
	gulp.src('./src/js/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
});


gulp.task('img', function () {
	gulp.src('./src/img/*')
	.pipe(imagemin({progressive:true}))
	.pipe(gulp.dest('dist/img/'));
})


gulp.task('html', function () {
	gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
})


gulp.task('connect', function () {
	gulp.src('./*.html')
	.pipe(connect.reload());
})

gulp.task('watch',['css','html','js','img'], function () {
	connect.server({
		root: './',
		livereload: true
	});


	gulp.watch('./src/scss/*.scss',['css','connect']);
	gulp.watch('./*.html',['html','connect']);
	gulp.watch('./src/img/*',['img','connect']);
	

})
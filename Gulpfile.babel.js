import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import del from 'del';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import uglifycss from 'gulp-uglifycss';
import webpack from 'webpack-stream';
//import rename from 'gulp-rename';

gulp.task('js:bundle', () => {
    gulp.start('js:clean');

    gulp.src(['src/js/app.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('js:clean', () => {
    del(['dist/js/bundle.js']);
    del.sync(['dist/js/bundle.js']);
})

gulp.task('js', () => {
    gulp.start('js:bundle');
    gulp.watch('src/js/**/*.js', ['js:bundle']);
});

gulp.task('sass:bundle', () => {
    gulp.start('sass:clean');

    gulp.src('src/sass/app.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass:clean', () => {
    del(['dist/css/style.css']);
    del.sync(['dist/css/style.css']);
});

gulp.task('sass', () => {
    gulp.start('sass:bundle');
    gulp.watch('src/sass/**/*.scss', ['sass:bundle']);
});

gulp.task('all', () => {
    gulp.start('js');
    gulp.start('sass');
});

//for production
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function build() {
    return src('ncw/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(purgecss({ content: ['*.html']}))
        .pipe(dest('css'))
}
function liveTask() {
    watch(['ncw/**/*.scss', '*.html'], build)
}
exports.default = series(build, liveTask)
//development
//const { src, dest, watch, series } = require('gulp');
//const sass = require('gulp-sass')(require('sass'));
//
//function build() {
//    return src('ncw/**/*.scss')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(dest('/css'))
//}
//
//function liveTask() {
//    watch(['ncw/**/*.scss'], build)
//}

//exports.default = series(build, liveTask)

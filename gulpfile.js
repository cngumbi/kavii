const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
    return src('ncw/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))
}

function liveTask() {
    watch(['ncw/**/*.scss'], build)
}

exports.default = series(build, liveTask)
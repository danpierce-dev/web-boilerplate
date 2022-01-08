const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function copy() {
    return src('src/*', { nodir: true })
        .pipe(dest('dist/'));
}

function compileSass() {
    return src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('dist/css/'));
}

function minify() {
    return src('src/js/*')
        .pipe(uglify())
        .pipe(dest('dist/js/'));
}

exports.default = function() {
    watch('src/*', copy);
    watch('src/sass/**/*.scss', compileSass);
    watch('src/js/*', minify);
};



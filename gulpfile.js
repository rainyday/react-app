/// <reference path="node_modules/typings-npm-gulp/4.0.0-alpha.2/index.d.ts" />

const gulp = require('gulp');
const del = require('del');
const $ = require('gulp-load-plugins')();

const src = {
    modules: 'package.json',
    resources: 'src/resources/**/*',
    ts: 'src/**/*.{ts,tsx}'
}

function modules(){
    return gulp.src(src.modules)
        .pipe(gulp.dest('app'))
        .pipe($.install({production: true}))
}
gulp.task(modules);

function resources() {
    return gulp.src(src.resources, { base: 'src/resources'})
        .pipe(gulp.dest('app/resources'))
}
gulp.task(resources)

function ts() {
    const project = $.typescript.createProject('tsconfig.json');
    
    return gulp.src(src.ts)
        .pipe($.print())
        .pipe($.sourcemaps.init())
        .pipe(project()).js
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('app'))
}
gulp.task(ts);

gulp.task('clean', () => del('app'));

gulp.task('compile', gulp.parallel(modules, ts, resources));

gulp.task('watch', gulp.series('compile', function watch() {
    gulp.watch(src.modules, modules);
    gulp.watch(src.resources, resources);
    gulp.watch(src.ts, ts);
}));
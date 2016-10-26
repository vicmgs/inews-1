'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync').create();

var paths = {
  src: {
    scripts: ['client/app/**/*.js'],
    html: ['client/app/**/*.html', 'client/index.html'],
    styles: ['client/css/main.css']
  },
  server_test: ['specs/server-spec.js'],
  server: 'index.js'
};

gulp.task('serve', function () {
  nodemon({
    script: paths.server,
    ignore: 'node_modules/**/*.js'
  });
});

gulp.task('start', ['serve'], function () {
  browserSync.init({
    notify: true,
    injectChanges: true,
    files: paths.src.scripts.concat(paths.src.html, paths.src.styles),
    proxy: 'localhost:5000'
  });
});

gulp.task('karma', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('test', function() {
  return gulp.src(paths.server_test, { read: false })
  .pipe(mocha({reporter: 'spec', color: true}))
  .once('end', () => {
      process.exit();
    });
});

gulp.task('default', ['start']);

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync').create();

var paths = {
  src: {
    scripts: ['client/app/**/*.js'],
    html: ['client/app/**/*.html', 'client/index.html'],
    styles: ['client/css/main.css']
  },
  serverTest: ['specs/server-spec.js'],
  server: 'index.js'
};

gulp.task('lint', function() {
  return gulp.src(paths.src.scripts)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
  // .pipe(jshint.reporter('fail'));
});

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

// backend testing is handled by gulp task with mocha
gulp.task('test-server', function() {
  return gulp.src(paths.serverTest, { read: false })
  .pipe(mocha({reporter: 'spec', color: true}))
  .once('end', () => {
      process.exit();
    });
});

gulp.task('test-all', ['test-server', 'test-client']);
gulp.task('test-client', ['lint', 'karma']); // front-end testing is handled by karma test runner
gulp.task('default', ['start']);

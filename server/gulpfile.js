var gulp = require('gulp');
var runSequence = require('run-sequence');

/*
 https://github.com/poeticninja/hapi-ninja/blob/master/gulpfile.js
 https://github.com/mavdi/angular-hapi-gulp-bootstrap/blob/master/gulpfile.js
 https://gist.github.com/webdesserts/5632955

 */

var paths = {
    scripts: ['server.js'],
};


gulp.task('live', function(callback) {
    runSequence('start', 'hello','stop', callback);
});

gulp.task('start', function() {
    var server = require('./server');

    server.start(function() {
        callback()
    });
});


gulp.task('hello', function (callback) {
    console.log('hello');
});

gulp.task('stop', function (callback) {
    var server = require('./server');

    server.stop(function() {
        callback()
    });
});


gulp.task('default', ['start']);

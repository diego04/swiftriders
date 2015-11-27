var Hapi = require('hapi');
var server = new Hapi.Server();

var thinky = require(__dirname + '/models/dbDrivers/thinky.js');
var r = thinky.r;
var type = thinky.type;
var Query = thinky.Query;
var Errors = thinky.Errors;

server.connection(
    {
        port: 8000
    });

server.route([
    {
        method: 'GET',
        path: '/',
        handler: require(__dirname + '/routes/home.js')
    },
    {
        method: 'POST',
        path: '/destination',
        handler: require(__dirname + '/routes/destination.js')
    },

]);

server.start(function () {
    console.log('Server running at:', server.info.uri);

});

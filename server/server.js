var Hapi = require('hapi');
var server = new Hapi.Server();

var thinky = require(__dirname + '/models/dbDrivers/thinky.js');
var r = thinky.r;
var type = thinky.type;
var Query = thinky.Query;
var Errors = thinky.Errors;

var userInquiry = require(__dirname + '/models/userInquiry.js');

server.connection(
    {
        port: 8000
    });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

        var inquire = new userInquiry({
            userId: "123",
            fromEmail: 'em@em.cc',
            toEmail: 'em@em.cc'
        })
        inquire.save()

        reply('Inquiry Saved, Open localhost:8080!');
    }
});



server.start(function () {
    console.log('Server running at:', server.info.uri);

});

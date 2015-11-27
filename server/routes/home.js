var userInquiry = require('../models/userInquiry.js');

var home = function (request, reply) {

    var inquire = new userInquiry({
        userId: "123",
        fromEmail: 'em@em.cc',
        toEmail: 'em@em.cc'
    })
    inquire.save()

    reply('Inquiry Saved, Open localhost:8080!');
}

module.exports = home;

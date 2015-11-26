var thinky = require(__dirname+'/dbDrivers/thinky.js');
var type = thinky.type;
var r = thinky.r;

var inquiry = thinky.createModel("Inquiry", {
    id: type.string().required().default(r.uuid()),
    userId: type.string().required().default('email@email.email'),
    fromEmail: type.string().email().required().default('email@email.email'),
    toEmail: type.string().email().required().default('email@email.email'),
}, {pk: "id"});

module.exports = inquiry;

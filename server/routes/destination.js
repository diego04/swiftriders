var destination = function (request, reply) {

    var roomInfo = request.payload

    reply(roomInfo);
}

module.exports = destination;

var http = require("http");

function start() {
    function onRequest(request, response) {
        console.info('Request received.');
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8989);
    console.info('Server has started.');
}

exports.start = start;
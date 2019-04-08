
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/global"] = requestHandlers.global;
handle["/readFile"] = requestHandlers.readFile;
handle["/writeFile"] = requestHandlers.writeFile;

server.start(router.route, handle);
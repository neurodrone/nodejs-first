var http = require("http");

function start() {
		http.createServer(function(request, response) {
			console.log("Request received.");
			response.writeHead(200, { "Content-type": "text/html" });
			response.write("Hello World.");
			response.end();
		}).listen(8888);

		console.log("Server has started.");
}

exports.start = start;
var port = (process.env.PORT || 8080);
var http = require('http');
http.createServer(function(req, res) {
		console.log('Listening on port: ' + port);
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Hello from Node.js!\n');
	}).listen(port);

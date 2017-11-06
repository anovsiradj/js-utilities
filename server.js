var finalhandler = require('finalhandler');
var { createServer } = require('http');
var serveStatic = require('serve-static');

const { exec } = require('child_process');

var serve = serveStatic('./', {
	'index': ['index.html']
});

var server = createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res));
});

server.listen(3000);

exec('google-chrome "http://localhost:3000/tests/"');

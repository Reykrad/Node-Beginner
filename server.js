var http = require("http");
var url = require("url");

function iniciar(route, handle) {
	function onRequest(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Peticion para " + pathname + " recibida.");
		route(handle, pathname, res);
	}

	http.createServer(onRequest).listen(8080);
	console.log("Servidor iniciado");

}

exports.iniciar = iniciar;
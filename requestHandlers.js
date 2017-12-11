var exec = require("child_process").exec;

function iniciar(res) {
	console.log("Manipulador de peticion 'iniciar' ha sido llamado.");

	exec("find /", 
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function(error, stdout, stderr){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(stdout);
		res.end();
	});
}

function subir(res) {
	console.log("Manipulador de peticion 'subir' ha sido llamado.");
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1 style='text-align: center'>Hola Subir</h1>");
	res.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
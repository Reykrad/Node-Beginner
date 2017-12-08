function iniciar() {
	console.log("Manipulador de peticion 'iniciar' ha sido llamado.");
	return "<h1 style='text-align: center'>Hola Iniciar</h1>";
}

function subir() {
	console.log("Manipulador de peticion 'subir' ha sido llamado.");
	return "<h1 style='text-align: center'>Hola Subir</h1>";
}

exports.iniciar = iniciar;
exports.subir = subir;
var querystring = require("querystring");

function iniciar(response, postData) {
  console.log("Manipulador de peticion 'inicio' fue llamado.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response, dataPosteada) {
    console.log("Manipulador de peticion 'subir' fue llamado.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1 style='text-align: center;'>Tu enviaste el texto</h1>" +
    "<h2 style='text-align: center; color: #666;'>" + querystring.parse(dataPosteada)["text"]) + "</h2>";
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
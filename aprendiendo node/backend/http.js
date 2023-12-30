const HTTP = require('http');

const Server = HTTP.createServer((req, res) => {

    // console.log(req); // nos muestra todo lo que el cliente envia al servidor como pedido.
    console.log(req.url); // ahora especificamos que solamente queremos la url del cliente que hace pedidos al servidor.

    if (req.url == '/') {
        res.write('Bienvenido al servidor.');
        return res.end();
    }
    else if (req.url == '/about') {
        res.write('acerca de');
        return res.end();
    } else {
        res.write('<h1>404 not found</h1><p>el sitio web no ha sido encontrado.</p><a href="/">Volver</a>');
        return res.end();
    }
});

Server.listen(3000, () => { console.log('Servidor activo en el puerto 3000.'); });
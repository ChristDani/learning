const http = require('http');
const { createReadStream } = require('fs');
const { error } = require('console');

const Server = http.createServer((req, res) => {
    // funcion creada para el uso de servidor y paginas.
    /* if (req.url == '/') {
        res.write('Welcome to the server');
        return res.end();
    } else {
        res.write('Not Found');
        return res.end();
    } */
    // funcion que probaremos en este ejemplo.
    const fileStream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8' // nueva forma de pasarle el codigo de lectura para el archivo como un objeto y poder pasar más parametros en el mismo.
    })
    fileStream.on('data', chunk => { // en las funciones flecha podemos obviar los parentesis.
        fileStream.pipe(res); // con la funcion "pipe" pasamos los datos que esta recibiendo nuestra constante hacia otra funcion.
    })
    fileStream.on('error', error => {
        console.log(error);
    })
})

Server.listen(3000, () => { console.log('Servidor activo en el puerto 3000.'); })
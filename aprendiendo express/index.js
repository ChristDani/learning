// instalamos el modulo de "express" mediante el comando "npm i express"

// creamos la constante del puerto a usar en el servidor

const Puerto = 3000;

// ejemplo de un servidor creado con http un modulo preinstalado de node

/* const http = require('http');
const fs = require('fs');

const Server = http.createServer((req, res) => {
    // esta es la forma con la que aprendimos el uso de http
    if (req.url == '/') {
        res.write('Hola bienvenido!');
        res.end();
        return
    } else {
        res.write('Not Found');
        res.end();
        return
    }

    // con esta forma podemos usar archivos, ya guiada a express, previamente importado el modulo de fyle system

    const doc = fs.createReadStream('./src/index.html'); // cargamos el archivo de html que tenemos con esta funcion para que sea leido por partes y no vuelva pesado el servidor.
    doc.pipe(res); // con esta funcion le pasamos los trozos de archivos o "chunks" a la funcion "res" para que se muestren en el servidor a medida que estos sean leidos.

})

Server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); }) // indicamos el puerto de escucha. */

// ejemplo de servidor con express

/* const express = require('express');

const server = express(); // asi ya hemos iniciado nuestro servidor.

server.get('/', (req, res) => {
    res.sendFile('./src/index.html', {
        root: __dirname // en esta funcion necesitamos pasarle como segundo parametro esta constante que le indica la ruta de nuestro archivo al servidor.
    }); // con express tenemos la funcion llamada "sendFile" para enviar archivos al servidor.
})

server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); }) // indicamos el puerto de escucha. */

// empezamos el servidor con tecnicas de routing.

/* const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Bienvenidos!!'); // con el metodo "send" le indicamos muchas más carateristicas del texto enviado al servidor y asi podrá interpretarlo de mejor manera en html.
});

server.get('/about', (req, res) => {
    res.send('About Page');
});

server.get('/weather', (req, res) => {
    res.send('Weather Page');
});

server.use((req,res)=>{ // el metodo "use" es como el "else" al no encontrar las paginas ya establecidas.
    res.status(404).send('Page Not Found'); // con el metodo "status" podemos establecer codigos de red.
})

server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); })  */

// metodos http con express

/* const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Bienvenidos!!');
});

server.get('/products', (req, res) => {
    res.send('Products Page');
});

server.post('/products', (req, res) => { // con el metodo "post" le enviamos algo al servidor y este lo guardará.
    res.send('We\'re creating products.');
});

server.put('/products', (req, res) => { // con el metodo "put" le enviamos algo al servidor y este lo actualizará dependiendo que elemento le indicamos.
    res.send('We\'re updating products.');
});

server.delete('/products', (req, res) => { // con el metodo "delete" le enviamos algo al servidor y este eliminará el elemento indicado.
    res.send('We\'re deleting products.');
});

server.patch('/products', (req, res) => { // con el metodo "patch" le enviamos algo al servidor y este actualizará cierta parte del elemento indicado.
    res.send('We\'re updating one part of product.');
});

server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); })  */

// http response con express

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Bienvenidos!!');
});

server.get('/myfile', (req, res) => {
    res.sendFile('./src/img/lago.jpg', {
        root: __dirname
    });
});

server.get('/user', (req, res) => {
    res.json({
        name: "Chris",
        lastname: "Diaz",
        age: 19,
        points: [10, 20, 30],
        address: {
            city: "Chiclayo",
            street: "24 de Junio"
        }
    });
});

server.get('/isAlive', (req, res) => {
    res.sendStatus(204); // con el metodo "sendStatus" enviamos codigos de estado http segun se requieran cuando se visita la ruta indicada.
});

server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); }) 
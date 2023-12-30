// explicacion basica de los event loops donde el programa le explica a la maquina que el bloque de comando expecificado esperará un momento y se ejecutará después de otro grupo de comandos.

/* console.log('first');

setTimeout(() => {
    console.log('second');
}, 3000);

console.log('third'); */

// ejemplo detallado con https

const HTTP = require('http');

const Server = HTTP.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Welcome to the Server.');
        return res.end();
    } else if (req.url == '/about') {
        // task || blocking code
        /* for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i);
        } */
        res.end('About Page.');
    } else {
        res.end('Not Found.');
    }
});

Server.listen(3000, () => { console.log('Servidor activo en el puerto 3000'); })
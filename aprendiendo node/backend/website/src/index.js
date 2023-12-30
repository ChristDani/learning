import express from 'express';

const Server = express();

Server.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
});

Server.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

Server.listen(process.env.PORT || 3000, () => { console.log("Servidor activo en el puerto 3000 mediante el uso del framework EXPRESS."); }); // con "process.env.PORT" le indicamos que la funcion espere una variable de entorno asignada por el servidor dado, si es que no existes tomará nuestra variable asiganada gracias al comando logico de js "||"
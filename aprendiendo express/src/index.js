// instalamos el modulo de "express" mediante el comando "npm i express"

// creamos la constante del puerto a usar en el servidor

const Puerto = 3000;

const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('ejs'); // instalamos el modulo "ejs" para mejorar el manejo de contenido hacia frontend
// requerimos el archivo de la base de datos
const connect = require('./bd');

connect(); // iniciamos la conexion antes de que se conecte el servidor.

const server = express();

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

// const express = require('express');

// const server = express();

// server.get('/', (req, res) => {
//     res.send('Bienvenidos!!');
// });

// server.get('/myfile', (req, res) => {
//     res.sendFile('./src/img/lago.jpg', {
//         root: __dirname
//     });
// });

// server.get('/user', (req, res) => {
//     res.json({
//         name: "Chris",
//         lastname: "Diaz",
//         age: 19,
//         points: [10, 20, 30],
//         address: {
//             city: "Chiclayo",
//             street: "24 de Junio"
//         }
//     });
// });

// server.get('/isAlive', (req, res) => {
//     res.sendStatus(204); // con el metodo "sendStatus" enviamos codigos de estado http segun se requieran cuando se visita la ruta indicada. || el código 204 significa que todo esta bien pero que no hay contenido que mostrar.
// });

// server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); }) 

// const express = require('express');

// const server = express();

// server.use(express.text()); // con este metodo express interpreta el texto plano que le envia el cliente
// server.use(express.json()); // con este metodo express interpreta el texto en formato json que le envia el cliente
// server.use(express.urlencoded({extended: false})); // con este metodo express interpreta los datos que vienes desde un formulario enviado por el cliente || con "{extended: false}" le indicamos que solo debe interpretar texto

// server.post('/user', (req, res) => {
//     console.log(req.body); // con el "req.body" podemos obtener los diferentes tipos de texto que el cliente le envia al servidor
//     res.send('creando un usuario');
// });

// server.listen(Puerto, () => { console.log('Servidor activo en el puerto: ' + Puerto); }) 

// server.get('/hello/:username', (req, res)=>{ // con este tipo de ruta todo lo que va despues de los ":" se interpreta como parametros de la url que luego se pueden utilizar debido a sus valores dinamicos
//     console.log(typeof req.params.username);
//     res.send(`Hello ${req.params.username.toUpperCase()}`) // le agregamos el metodo toUpperCase() para convertirlo en mayusculas.
// })

// server.get('/sumar/:x/:y', (req, res)=>{
//     const {x,y} = req.params

//     const result = parseInt(x) + parseInt(y);

//     console.log(result);    
//     res.send(`Resultado: ${result}`)
// })

// server.get('/users/:usernames/photo', (req, res) => {
//     console.log(req.query); // las queries de una url son todos los valores escritos despues de un "?" como variables
//     if (req.params.usernames === 'chris'){
//         res.sendFile('./src/img/lago.jpg', {
//             root: __dirname
//         });
//     } else {
//         res.send('usuario sin acceso');
//     }
// })

// server.all('/home', (req, res) => { // con el metodo "all" se aceptan todos los metodos de http
//     res.send('home');
// })

//funcion middleware
// server.use((req, res, next) => { // con este "use" nos aseguramos que el servidor antes de dirigir hacia una ruta, pase por esta funcion, obteniendo datos de navegación, es igual a las funciones de nuestras rutas con el nuevo parametro "next" 
//     const ruta = req.url;
//     const metodo = req.method;
//     console.log(`pasó por aquí: ${ruta}, con el metodo:${metodo}`);
    
//     next(); // "next()" nos sirve para indicarle al servidor que una vez realizo lo programado  en este bloque, continue hacia la ruta indicada.
// });

// middleware 2.0
// server.use((req, res, next) => {
//     const ruta = req.url;
//     const metodo = req.method;
//     console.log(`pasó por aquí: ${ruta}, con el metodo:${metodo}`);
//     next();
// });
// server.get('/profile', (req, res) => {
//     res.send('profile page.');
// })
// server.use((req, res, next) => {
//     if (req.query.login === 'chris@cdnweb.com') {
//         next();
//     } 
//     else {
//         res.send('no autorizado');
//     }
// });
// server.get('/dashboard', (req, res) => {
//     res.send('Dashboard page.');
// })

// middleware 3.0
// instalamos el paquete "morgan" con el comando "npm i morgan"
// const morgan = require('morgan');
// server.use(morgan('dev')); // este es una middleware que reemplaza al que creamos para un logeo
// server.get('/profile',(req,res)=>{res.send('profile page.');});
// server.use((req,res,next)=>{if(req.query.login==='chris@cdnweb.com'){next();}else{res.send('no autorizado');}}); // middleware de autenticación.
// server.get('/dashboard',(req,res)=>{res.send('Dashboard page.');});

// para rest api creamos un nuevo proyecto

// router
const HomeRoutes = require('./router/home');
const UserRoutes = require('./router/user');

// settings
// importamos el metodo "path" para poder trabajar desde distintas rutas del servidor.
server.use('/public', express.static(path.join(__dirname, 'public'))); // con este metodo llamamos archivos dentro de una carpeta hacia el servidor || el nombre al principio es para indicar al servidor una ruta especifica con la que podemos acceder a la carpeta publica del servidor, funciona en caso de tener rutas con el mismo nombre de algun archivo. || con la funcion "path.join(__dirname, 'folder')" unimos el nombre de la carpeta que queremos usar con la ruta exacta en la que se encuentra, para asi poder llamar los archivos desde cualquier punto del servidor.

server.set('case sensitive routing', true); // es una variable predefinida por express que nos ayuda a reconocer las rutas conforme a su nombre, con sensivilidad de caracteres.
server.set('serverName', 'Express Course'); // con el metodo "set" creamos una variable que querramos usar más tarde con el metodo "get"
server.set('port', 3000);
// configuramos la ubicacion de la carpeta views
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// middlewares
server.use(express.json());
server.use(morgan('dev'));

// routes
// HomeRoutes(server);
// UserRoutes(server);
server.use(HomeRoutes);
server.use(UserRoutes);

server.listen(server.get('port'),()=>{console.log(`Servidor ${server.get('serverName')} activo en el puerto: ${server.get('port')}`);}); 

// estructura correcta de un servidor
// settings
// middlewares
// routes
// modulo OS

/*
const OS = require ('os'); // asi se importan modulos preinstalados con node.js, el "./" solo se usa para modulos en archivos dentro de la misma carpeta del archivo. este modulo sirve para obtener informacion de las caracteristicas del sistema y dispositivo en uso.

console.log('Sistema Operativo:', OS.platform()); // con esta funcion, el modulo OS nos dice que tipo de sistema operativo estamos usando.
console.log('Versión del Sistema Operativo:', OS.release()); // con esta funcion, el modulo OS nos dice la version del sistema operativo que estamos usando.
console.log('Memoria Disponible en el Dispositivo:', OS.freemem(), 'bytes.'); // con esta funcion, el modulo OS nos dice cual es la memoria ram libre del dispositivo en uso.
console.log('Memoria Total del Dispositivo:', OS.totalmem(), 'bytes.'); // con esta funcion, el modulo OS nos dice cual es la memoria ram total del dispositivo en uso.
*/

// modulo File System

/*
const FS = require ('fs'); // este modulo sirve para gestionar archivos del sistema.

FS.writeFile('./texto.txt', 'probando linea uno', function (err) { if (err) { console.log(err); } else { console.log('Archivo Creado.'); }}); // esta funcion del modulo FS nos permite crear un archivo dentro de nuestar app, utilizamos "./" para indicar que será creado en la carpeta actual de la app, como primer parametro ingresamos el nombre del archivo, como segundo parametro algun contenido del archivo a crear, y como tercer parametro ingresamos una funcion o un callback que nos sirve para identificar algun error ocurrido o para verificar la ejecucion satisfactoria de la funcion. debemos usar un console.log para poder mostrar un mensaje, no funciona con return, debido a que es una funcion ascincrona.

console.log('última linea de codigo.');

FS.readFile('./texto.txt', function (err, data) { if (err) { console.log(err); } else { console.log('Contenido del Archivo:', data.toString()); }}); // esta funcion nos permite leer el contenido de un archivo, en esta ocacion solo ingresamos el nombre del aricho indicando en que carpeta esta posicionado y como segundo parametro nuestra funcion o callback para detectar errores o mostrar el resultado, ya que este parametro convertirá nuestra peticion en ascincrona. Como dato adicional tenemos que esta funcion nos entrega el texto en un formato de maquina por lo cual deberemos hacerlo legible mediante la funcion de javascript llamada "ToString()".
*/

// modulo HTTP

/*
const HTTP = require('http'); // este modulo sirve para crear y gestionar servidores.

// se instaló la libreria de colors, con "npm install colors".
const COLORS = require('colors'); // este modulo nos sirve para cambiar de color las letras de la consola.

// primera forma de hacerlo

HTTP.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type' : 'text/html' }); // con esto indicamos que la respuesta será una cabecera de la pagina web. || el primer parametro es un codigo de estado de HTTP en este caso significa "OK" || con el segundo parametro le entregamos informacion adicional al servidor, en este caso se le esta indicando que el texto entregado será de tipo html.
    res.write('<h1>Hola a todos</h1>'); // indicamos una respuesta del servidor al cliente.
    res.end(); // finalizamos la respuesta para que otro cliente ejecute más peticiones.
}).listen(3000); // esta funcion se usa con una funcion de respuesta para que se ejecute de manera ascincrona, a su vez la funcion tiene el parametro de peticion o request mayormente usado como "req", y el parametro de respuesta o respons mayormente usado como "res". se utilizan para obtener una peticion al servidor y mostrar una respuesta al cliente. || la funcion listen al final de nuestra funcion de respuesta del servidor sirve para indicarle al servidor desde que puerto escuchará las peticiones. una vez ejecutado el comando visualizamos los resultados desde el navegador en "localhost:3000" o el numero de puerto que le hayamos indicado. || el servidor de cancela con "ctrl" + "c" 2 veces.

// codigo optimizado

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type' : 'text/html' });
    res.write('<h1>Hola a todos</h1>');
    res.end();
}; // aqui guardamos la respuesta e indicaciones del servidor en una constante

const Server = HTTP.createServer(handleServer); // se crea el servidor con las indicaciones asignadas en la constante anterior.

Server.listen(3000, function () { console.log('Servidor activo en el puerto 3000'.green); }); // le asignamos un puerto al servidor desde la constante asignada anterioremente y agregamos un segundo parametro como callback para respuesta del servidor mediante la consola.

// en consola ejecutamos el comando de "npm init" posteriormente a esto el servidor nos mostrará información a cerca de él, como que dependencias y modulos utiliza, quien lo creo, su version, una descripcion, que archivo de entrada usará que dejaremos por defecto "index.js", un comando de testeo, un repositorio de git, palabras claves para encontrar el proyecto, autor, una licencia pero podemos usar la de por defecto. || con esto indicaremos al proyecto que el codigo depende de el modulo creado al finalizar llamado "package.json". Este archivo nos servirá para la produccion de nuestro codigo en algun servidor en la nube ya que indicará que modulos se necesitan para ejecutar el codigo. || adicionalmente a esto en el archivo "package.jason" podemos editar la parte de scripts quitando el texto de test y poniendo un codigo de inicio donde podremos asignar cualquier tipo de codigo, mayormente es usado para almacenar comando de inicio del servidor "scripts": { "start": "node index.js" } || una vez editado el archivo ahora podremos usar "npm start" para ejecutar nuestro codigo. Con express.js podremos crear nuestro servidor sin tener que escribirlo desde cero ya que este framework nos ayuda a construirlo.

// se instalo "express.js" con el comando "npm i express"
*/

// modulo express

const EXPRESS = require('express'); // este modulo sirve para crear y gestionar servidores pero usando frameworks para facilitar el trabajo.
const COLORS = require('colors'); // modulo para cambiar de color a los mensajes de consola.

const Server = EXPRESS(); // guardamos el servidor iniciado en una constante llamada "Server" para luego añadirle más funciones de manera optimizada.

Server.get('/', (req,res) => { 
    res.send('<h1>Bienvenidos a este servidor iniciado con EXPRESS.</h1>'); // funciona de igual manera que en el ejemplo anterior pero ahora usamos "send" en lugar de "write".
    res.end(); // esta funcion pasa a ser opcional ya que EXPRESS lo maneja de manera automatica.
}); // Esta vez la funcion de callback la iniciamos de una manera más actualizada reemplazando el "function(){}" por "()=>{}" o también llamada como "funcion flecha".

Server.listen(3000, () => { console.log("Servidor activo en el puerto 3000 mediante el uso del framework EXPRESS.".green); }); // asignamos el puerto de escucha para el servidor y su callback.
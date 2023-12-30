const FS = require('fs');

// solo cuando la palabra "Sync" este al final del metodo ese será un metodo sincrono
/* // metodo para leer archivos ya creados.

const first = FS.readFileSync('./data/first.txt', 'utf-8'); // con este metodo obtenemos el contenido del archivo de texto indicado por una ruta en el primer parametro, en el segundo parametro indicamos el formato en el cual queremos que el metodo lea el texto para que sea más legible para el usuario.
console.log(first);

// esta es una forma aleatoria para formatear el texto.
const second = FS.readFileSync('./data/second.txt');
console.log(second.toString());

// metodo para crear archivos.

FS.writeFileSync('./data/third.txt', 'este es un tercer archivo creado desde la funcion "writeFileSync"'); // con este metodo podemos crear archivos, indicando como primer parametro la ruta en donde queremos que se aloje el nuevo archivo y como segundo parametro el texto o contenido que deseamos que tenga dicho archivo.

const titulo = 'este es un cuarto archivo creado desde la funcion "writeFileSync" y una variable'

FS.writeFileSync('./data/fourth.txt', titulo); // si el archivo ya existe solo lo sobreescribirá.

let textAdd = 'contenido agregado con \'flag: "a"\'';
FS.writeFileSync('./data/fourth.txt', textAdd, {
    flag: 'a'
}); // añadiendo como tercer parametro un objeto con "flag: 'a'" podemos agregar contenido al archivo en lugar de sobreescribirlo.
 */

// por otro lado un metodo sin la palabra "Sync" al final de su nombre esta por defecto en modo ascincrono. || las funciones ascincronas no pueden ser guardadas en constantes, estas tienes un segundo parametro como funcion en el cual se les puede indicar que hacer despues de la ejecucion de esa funcion ascincrona.

FS.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

    FS.writeFile('./data/newFile.txt', 'Archivo creado en una funcion ascincrona.', (error) => {
        if (error) {
            console.log(error);
        }
    });
});
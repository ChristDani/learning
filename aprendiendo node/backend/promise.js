
const { readFile } = require('fs');
const { promisify } = require('util'); // modulo con diferentes funciones de node para poder hacer codigo de manera más facil.

// esta linea reemplaza al codigo comentado despues de esto.
const getText = promisify(readFile);
/* // metodo ascincrono con promesas
const getText = (pathFile) => {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}; // convertimos la funcion en una constante haciendo uso de una funcion flecha
 */
/* 
getText('./backend/data/first.txt') // hacemos uso de la constante y el parametro que espera y asi nos devuelva el valor de su promesa.
    .then((result) => console.log(result)) // con la funcion then, nos devuelve el resultado si es que todo salio correcto.
    .then(()=>getText('./backend/data/fourth.txt')) // agregamos una segunda funcion despues de que la primera promesa haya resultado correcta.
    .then(result=>console.log(result)) // mostramos por consola en valor de la segunda funcion. || cualquier error dentro de ambas funciones será capturado por un solo catch.
    .catch(error => console.log(error)); // con la funcion catch, nos devuelve el error si es que algo falló.
 */
/* new Promise((resolve, reject)=>{
    readFile('./backend/data/first.txt', 'utf-8', (err, data)=>{
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
}); */

// metodo ascincrono de forma tradicional y dificil de leer en proyectos grandes
/* readFile('./backend/data/first.txt', 'utf-8', (err, data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); */

// metodos async y await

async function read() {
    try {
        // const result = await getText('./backend/data/first.txt');
        const result = await getText('./backend/data/first.txt', 'utf-8'); // le agregamos el lenguaje de codificacion para que pueda ser usado como promisify.
        const result2 = await getText('./backend/data/fourth.txt', 'utf-8');
        console.log(result);
        console.log(result2);
        // throw new Error('Esto es un error inesperado'); // con la funcion "throw" podemos crear errores como forma de restringir posciones de codigo si no se cumple ciertos requisitos.
    } catch (error) {
        console.log(error);
    }
}

read();
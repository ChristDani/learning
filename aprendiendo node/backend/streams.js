// creamos el archivo
/* const { writeFile } = require('fs/promises');

// recordamos que para usar promesas deben ser funciones ascincronas que se crean usando async y await
const createBigFile = async () => {
    await writeFile('./data/bigFile.txt', 'hello world '.repeat(100000));
};

createBigFile(); */

// ahora leemos el archivo con stream
const {createReadStream}=require('fs'); // llamamos la funcion "createReadStream" del modulo "fs" que nos ayudará a leer archivos demasiado grandes

const stream = createReadStream('./data/bigFile.txt', 'utf-8'); // creamos una constante que almacene todo el archivo

stream.on('data',(chunk)=>{
    console.log(chunk);
}); // le asignamos un evento de escucha a la constante creada con el archivo y esta será leida por partes o "chunks".

stream.on('end',()=>{
    console.log('Se terminó de leer el archivo');
});

stream.on('error',(error)=>{
    console.log(error);
});
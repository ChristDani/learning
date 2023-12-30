const { readFile } = require('fs/promises'); // es una nueva forma de importar el modulo file System pero ahora con todas sus funciones convertidas en promesas.

// con este nuevo readFile convertido en promesa gracias al modulo importado nos ahorramos aun más lineas de codigo.
async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8');
        console.log(result);
        const result2 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

read();
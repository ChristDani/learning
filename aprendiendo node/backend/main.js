const { myWebAddress, myNumber, myArray, user } = require('./module/myModule'); // siempre recordar el "./" para indicar que esta carpeta es la inicial del ruteo.

// console.log(myWebAddress);
// console.log(myNumber);
// console.log(myArray);
// console.log(user);

const MATH = require('./math/index'); // forma de importar archivos externos para usar sus funciones en el archivo actual.

console.log(MATH.sumar(10, 20));
console.log(MATH.restar(10, 20));
console.log(MATH.multiplicar(10, 20));
console.log(MATH.dividir(10, 20));
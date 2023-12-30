// console.log(Math.random() *10);

// let username = 'Christian';
// let age = 19;
// let hasHobbies = true;
// let points = [10, 20, 30];
// let user = { name: 'Daniel', lastname: 'Díaz'};
// const PI = 3.1416;

// console.log('Nombre del Usuario:', username);
// console.log('Edad del Usuario:', age);
// console.log('¿Tiene Hobys?', hasHobbies);
// console.log('¿Puntos?', points);
// console.log('Usuario:', user);
// console.log('Valor de PI:', PI);

// const age = 17;

// if (age >= 18) {
//     console.log('Eres un adulto.');
// } else if (age >= 13) {
//     console.log('Eres un adolescente.');
// } else {
//     console.log('Eres un niño.');
// }

// const names = ['joe', 'john', 'marco'];

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// }

// forma tradicional de construir una funcion.

/* function showUserInfo(userName, userAge) {
    // return 'The username is ' + userName + ', '+ 'the user is ' + userAge + ' years old.'; // esta es la manera tradicional, concatenando el texto con el contenido de las variables.
    return `The username is ${userName}, the user is ${userAge} years old.`; // de esta manera podemos evitarnos las concatenaciones llamando al contenido de variables de la siguiente manera "${variable}", no obstante esta manera de utilizar variables dentro de cadenas solo puede usarse con tildes invertidas `` en lugar de comillas simples '' o dobles "" como limitadores de cadena.
} */

// forma optimizada de construir una funcion, esto solo funciona con funciones cortas o de una sola respuesta.

const showUserInfo = (userName, userAge) => `The username is ${userName}, the user is ${userAge} years old.`; // también llamada funcion flecha, puede ser asignada a una variable o constante, esta funcion al tener solo una respuesta y estar almacenada omite el return y ya no es necesario que la respuesta este entre llaves.

console.log(showUserInfo("Chris", 19));
console.log(showUserInfo("Daniel", 20));

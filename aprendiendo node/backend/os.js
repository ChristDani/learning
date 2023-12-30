const OS = require('os');

console.log(OS.userInfo()); // funcion del modulo OS que nos brinda informacion del usuario del sistema.
console.log(OS.uptime()); // funcion del modulo OS que nos dice el tiempo que lleva el dispositivo en uso.
console.log(OS.platform()); // funcion del modulo OS que nos dice que tipo de plataforma usa el dispositivo.
console.log(OS.totalmem()); // funcion del modulo OS que nos dice la cantidad de memoria ram total en el dispositivo.
console.log(OS.freemem()); // funcion del modulo OS que nos dice la cantidad de memoria ram disponible en el dispositivo.

console.table({
    os: OS.platform(),
    version: OS.release(),
    totalMemory: OS.totalmem()
}); // una forma diferente de mandar mensajes por consola.
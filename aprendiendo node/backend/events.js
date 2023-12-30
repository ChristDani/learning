const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response', (data) => {
    console.log(data);
}); // con "on" escuchamos el evento emitido y realizamos una funcion en base al evento escuchado.

CustomEmitter.emit('response', 'Hola'); // el "emit" sirve para emitir un evento.
CustomEmitter.emit('response', 'Christian');
CustomEmitter.emit('response', 20);
CustomEmitter.emit('response', [1, 2, 3]);
CustomEmitter.emit('response', { name: "Daniel" });
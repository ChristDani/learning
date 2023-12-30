const PATH = require('path');

// console.log(PATH); // nos muestra el contenido de todo el modulo.
console.log(PATH.sep); // nos muestra el tipo de separador que se utiliza en las direcciones de la plataforma en uso. al ser un metodo se escribe sin los parentesis finales
console.log(PATH.join('/public', 'dist','/styles','main.css')); // esta funcion nos permite unir carpetas y crear la ruta correctamente formateada para la plataforma en uso.

const filePath = PATH.join('/public', 'dist','/styles','main.css');
console.log(filePath);
console.log(PATH.basename(filePath)); // nos devuelve la ruta en uso pero sin el nombre del archivo.
console.log(PATH.dirname(filePath)); // nos devuelve el nombre del archivo pero sin la ruta.
console.log(PATH.parse(filePath)); // nos devuelve la ruta y el nombre del archivo pero en un formato de objeto, separando y especificando detalles del mismo.
console.log(PATH.resolve('dist')); // completa la ruta del archivo, desde la raiz del dispositivo hasta la carpeta en la cual se esta ejecutando el proyecto.
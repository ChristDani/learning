console.log(__dirname); // es una constante global ya iniciada por node, podemos llamarlas anteponiendo doble guion bajo a su nombre "__variable". || esta variable nos da la ruta en la cual estamos trabajando.

console.log(__filename); // esta constante global nos da la ruta y el nombre del archivo en el cual estamos trabajando.

console.log(module); // este es un objeto que nos ofrece informacion centrada en el proyecto que estamos realizando, especialmente de los modulos usados en él. || las constantes globales mostradas anteriormente corresponden a este modulo. || module permite separar una aplicacion de js en varios archivos.

console.log(require); // esta funcion nos muestra las dependencias del proyecto y lo que necesita para su funcionamiento. || require permite exportar archivos para ser usados en otras ventanas.

console.log(process); // esta funcion nos ofrece informacion del sistema.
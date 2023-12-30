// si quisieramos exportar individualmente con la nueva forma, bastaria con añadir la palabra "export" antes de inciar la funcion.

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    return x / y;
}

// forma grupal de exportacion de funciones para ser usadas en otros archivos.
// forma antigua de exportar en node.
/* module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
} */

// nueva forma de exportar
export default {
    sumar,
    restar,
    multiplicar,
    dividir
};
// esto a parte de ser una forma conjunta de exportacion tmbn nos sirve para que podemos exportar modulos que no esten llamando, modulos exportados por defecto.
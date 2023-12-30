const Math = {};

function add(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b == 0) {
        return "No se puede dividir un número entre 0, intente con otro digito por favor.";
    }else{
        return a / b;
    }
}

Math.add = add;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

function hello(name) {
    return "hola '"+name+"'.";    
}

// exportar grupalmente
module.exports = Math;

// module.exports = hello;

// exportar individualmente
// exports.add = add;
// exports.restar = restar;
// exports.multiplicar = multiplicar;
// exports.dividir = dividir;
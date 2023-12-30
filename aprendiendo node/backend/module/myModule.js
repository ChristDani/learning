let mySecretVariable = 'Se logrará gente.';

const myWebAddress = "portafolio-christian-diaz.netlify.app";
const myNumber = 955082199;
const myArray = [22, 28, 11];
const user = {
    name: 'Chris',
    lastname: 'Díaz'
}

/* // exportar grupalmente
module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user
}; */

// exportar individualmente
module.exports.myWebAddress = myWebAddress;
module.exports.myNumber = myNumber;
module.exports.myArray = myArray;
module.exports.user = user;
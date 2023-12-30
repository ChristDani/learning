// para usar esta nueva forma de importar modulos con js no olvidemos asignar el valor de '"type": "module"' dentro de nuestro archivo "package.json".

import math from './math/index.js'; // asi importariamos los modulos con la nueva forma, en esta debemos especificar la extencion del archivo a importar.

console.log(math.sumar(10, 20));
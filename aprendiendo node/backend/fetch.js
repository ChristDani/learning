// forma ascincrona
/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data)); */

// utilizando async y await
async function loadData(){
    // ejecutamos dentro de un "try catch" para poder capturar posibles errores.
    try {
        throw new error('Error creado intencionalmente'); // recordamos que asi podemos crear errores.
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json(); // convertimos a formato json los datos recividos.
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

loadData();
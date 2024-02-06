// function HomeRoutes(server) {
//     server.get('/about', (req, res) => {
//         res.send('About rout');
//     });
    
//     server.get('/dashboard', (req, res) => {
//         res.send('Dashboard rout');
//     });
// }

const {Router} = require('express');
const axios = require('axios');

const server = Router();

server.get('/', (req, res) => {
    let isActive = false

    const users = [
        {
            id: 1,
            name: "ryan",
            lastname: "perez"
        },
        {
            id: 2,
            name: "Christian",
            lastname: "Campaña"
        }
    ]

    res.render('index', {
        title: 'holaaaaaaaaa',
        isActive,
        users
    });
});

server.get('/about', (req, res) => {
    // res.send('About rout');
    res.render('about');
});

server.get('/post', async (req, res) => {
    // res.send('About rout');
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.render('post', {
        post: response.data
    });
});

server.get('/dashboard', (req, res) => {
    // res.send('Dashboard rout');
    res.render('dashboard');
});

// module.exports = HomeRoutes;
module.exports = server;

// instalamos el modulo "axios" para poder acceder a datos de otro servidor.
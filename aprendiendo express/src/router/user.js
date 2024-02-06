// function UserRoutes(server) {
//     server.get('/profile', (req, res) => {
//         res.send('Profile Page');
//     });
    
//     server.get('/UserName', (req, res) => {
//         res.send('username rout');
//     });
// };

const {Router} = require('express');

const server = Router();

server.get('/profile', (req, res) => {
    // res.send('Profile Page');
    res.render('user');
});

// module.exports = UserRoutes;
module.exports = server;
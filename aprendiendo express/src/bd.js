const mysql = require('mysql2/promise');

async function connectDB() {
    const connection = await mysql.createConnection({
        host: 'y0ndi71v4mn2.us-east-2.psdb.cloud',
        user: 'jzlhrnf0pquf',
        password: 'pscale_pw_TjikH11qLCOP2VHxdSykiuTUmPd43M6tuD1boNNUT0w',
        database: 'expressdb',
        ssl: {
            rejectUnauthorized: false
        }
    });
    
    const result = await connection.query('SELECT "hola desde la base de datos" as result');
    console.log(result);
}

module.exports = connectDB;
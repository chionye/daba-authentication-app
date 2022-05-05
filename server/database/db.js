const {createPool} = require('mysql')
require('dotenv').config();

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit:10
});

module.exports = pool;
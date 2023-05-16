const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "dmitrian",
    host: "localhost",
    port: "5432",
    database: "onlinetournament",
})


module.exports = pool
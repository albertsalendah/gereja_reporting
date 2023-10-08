const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user: 'root',//process.env.db_user,
    password:'',//process.env.db_password,
    database:'dbgereja',//process.env.db_name,
    charset : 'utf8mb4',
    multipleStatements: true,
})

module.exports = {
    db
}

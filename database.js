const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'dtg_member',
  user: 'root',
  password: 'root'
});

module.exports = connection;
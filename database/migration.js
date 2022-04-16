const mysql = require('mysql2');
const migration = require('mysql-migrations');

const connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : 'qwerty',
  database : 'diplom_database'
});

migration.init(connection, __dirname + '/migrations');
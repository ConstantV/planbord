const config = require('dotenv').config();
const mysql = require('mysql2');

const cn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB
});

module.exports = cn;

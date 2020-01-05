const config = require('dotenv').config();
const mysql = require('mysql2');

const cn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB
});

cn.connect(err => {
  if (err) console.log('Error : No database...');
  console.log(`Connected to database : ${process.env.DB} `);
});

module.exports = cn;

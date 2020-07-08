const mysql = require('mysql');
const faker = require('faker');

// DB connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'join_us'
});

const queryString = "SELECT * FROM users";
connection.query(queryString, (error, result, fields) => {
  if(error) throw error;
  console.log(`email: ${result[0].email}`)
});
connection.end();
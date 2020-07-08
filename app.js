const express = require('express');
const mysql = require('mysql');
const faker = require('faker');

const app = express();
// DB connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'join_us'
});

app.get('/', (req, res) => {
  // count total mails from db
  let queryString = "SELECT COUNT(*) as total_count from users";
  connection.query(queryString, (error, results) => {
    if(error) throw error;
    const count = results[0].total_count;
    res.send(`We have ${count} users in our db`);
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
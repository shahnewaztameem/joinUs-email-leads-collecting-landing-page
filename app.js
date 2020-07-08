const mysql = require('mysql');
const faker = require('faker');

// DB connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'join_us'
});

// generate 1k emails
let data = [];
for (let i = 0; i < 1000; i++) {
  data.push([
    faker.internet.email().toLowerCase(),
    faker.date.past()
  ]);
}

// Insert user data to db 
let queryString = "INSERT INTO users (email, created_at) VALUES ?";
connection.query(queryString, [data], (error, result) => {
  if(error) throw error;
  console.log(result);
})

connection.end();

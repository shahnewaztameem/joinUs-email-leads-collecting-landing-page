const express = require('express');
const mysql = require('mysql');
const faker = require('faker');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
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
    if (error) throw error;
    const count = results[0].total_count;
    res.render('home', { count: count });
  });
});

app.post('/leads', (req, res) => {
  // let user = { email: req.body.email };
  // let queryString = 'INSERT INTO users SET ?';
  // connection.query(queryString, user, (error, result) => {
  //   if (error) throw error;
  //   res.redirect('/');
  // });

  connection.query("SELECT COUNT(*) AS cnt FROM users WHERE email = ? ",
    req.body.email, function (err, data) {
      if (err) {
        console.log(err);
      }
      else {
        if (data[0].cnt > 0) {
          res.send({ error: 'User already exists' });
        } else {
          let user = { email: req.body.email }
          connection.query("INSERT INTO users SET ?", user, function (err, insert) {
            if (err) {
              throw err;
            } else {
              res.redirect('/');
            }
          })
        }
      }
    })
});
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
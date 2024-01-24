require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const app = express(); //app express
const port = process.env.PORT || 7777;
const hostname = process.env.HOST_NAME; // => hardcode

// config template engine
configViewEngine(app); 

// use router
app.use('/', webRoutes);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307', // default 3306
  user: 'root', // default password: empty
  password: '123456',
  database: 'hoidanit'
});

connection.query(
  'select * from Users u', 
  function (error, results, fields) {
    console.log(">>> results= ", results);
    console.log(">>> fields= ", fields);
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});
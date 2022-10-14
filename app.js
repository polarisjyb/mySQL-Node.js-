// 익스프레스
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// mySQL
const connection = require('./database');

// 루트 페이지
app.get("/", (req, res) => {
  let sql = "SELECT * FROM LOGIN_MEMBER";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});


app.listen(port, () => {
  console.log("Server started on Port 5000");
  connection.connect(function(err){
    if(err) throw err;
    console.log("Database connected!");
  });
});


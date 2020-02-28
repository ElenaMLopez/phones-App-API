const express = require("express");
const app = express();
const phones = require('./phones/phones.json') ;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/phones', function (req, res) {
  res.json(phones);
});

app.listen(8080, () => {
 console.log("Server start at port 8080");
});

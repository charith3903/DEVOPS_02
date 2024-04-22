var express = require("express");
var app = express();

app.get("/home", function (req, res) {
  res.send('{ "response": "Hello, Welcome to my home" }');
});

app.get("/update", function (req, res) {
  res.send('{ "response": "Hello you can update" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;

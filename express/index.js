var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/proxy", function (req, res) {
  res.send("跨域请求成功");
});
app.get("/testtwo", function (req, res) {
  res.send("跨域请求成功22");
});

app.listen(3000);

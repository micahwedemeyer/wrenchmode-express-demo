var express = require('express');
var wrenchmodeExpress = require('wrenchmode-express');

var app = express();

app.use(wrenchmodeExpress({
  jwt: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJQcm9qZWN0OjIiLCJleHAiOjE0Njc5NDY2OTMsImlhdCI6MTQ2NTM1NDY5MywiaXNzIjoiV3JlbmNobW9kZSIsImp0aSI6ImM3ZjMwZTllLTQ0MzItNGJmYy05MWZlLTIwOGYzOTQ0ZTliNiIsInBlbSI6e30sInN1YiI6IlByb2plY3Q6MiIsInR5cCI6InRva2VuIn0.e5O9W9sTtQIbFNu5zfGyvp396PHeFrPNwwP8_FJE8M-MZ8safc8SuoGY3o6yLpF70ZoNQnHO3sg4FKD4DChl6g",
  statusProtocol: "https",
  statusHost: "wrenchmode-staging.herokuapp.com"
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
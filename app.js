var express = require('express');
var wrenchmodeExpress = require('wrenchmode-express');

var app = express();

app.use(wrenchmodeExpress({
  jwt: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJQcm9qZWN0OjQzIiwiZXhwIjoxNTU2NjM0ODcxLCJpYXQiOjE1NTQwNDI4NzEsImlzcyI6IldyZW5jaG1vZGUiLCJqdGkiOiI4YTdmYjQ1NC03MjY0LTRkZWMtOGY2MC04NTFmNGExNGIzZTQiLCJwZW0iOnt9LCJzdWIiOiJQcm9qZWN0OjQzIiwidHlwIjoidG9rZW4ifQ.bUi6ADBkcLtfWKeSCZAELsTyka0Tfv5tEGYdsDLvUttYngsB-5Kxfw0Xv0HrTItuXQVz4KmDFJh81WKgNGj14w"
  // statusProtocol: "https",
  // statusHost: "wrenchmode-staging.herokuapp.com"
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
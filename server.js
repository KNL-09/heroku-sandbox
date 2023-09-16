var express = require('express');
var bodyParser = require('body-parser');
const port = process.env.PORT || 4800;
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Rewrite without extension
app.use(express.static(__dirname + '/', {
  extensions: ['html']
}));

// Listen to the port
http.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('--------------------------------------');
  console.log('Start server on port: ' + port);
  console.log('--------------------------------------');
})


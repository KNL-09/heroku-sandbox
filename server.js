var express = require('express');
var bodyParser = require('body-parser');
const port = process.env.PORT || 4800;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.get('/messages', (req, res) => {
   // Si on a un historique stocké quelque part
})

io.on('connection', (socket) =>{
  console.log('a user is connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('message', (msg) => {
    console.log('message : ' + msg);
    io.emit('message', msg);
  });
})

// Listen to the port
http.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log('--------------------------------------------');
  console.log('Start server on port: ' + port);
  console.log('--------------------------------------------');
})


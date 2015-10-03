var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var body = require('body-parser');

app.set('view engine', 'html');
app.use(body.json());


//Task Manager (talk to db)
var PM = require('./modules/parse-manager');

//Routes
require('./routes/index.js')(app, PM);

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

server.listen(2000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
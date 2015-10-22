var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var body = require('body-parser');
var cookieParser = require('cookie-parser');

app.set('view engine', 'html');
app.use(body.json());
app.use(cookieParser());



// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    console.log('cookie does not exist', cookie);
    // res.setHeader('Set-Cookie','test=value');
    // res.cookie('cookieName','randomNumber', { maxAge: 900000, httpOnly: false });
    // console.log('cookie created successfully');
    // res.send('hello world');
  } 
  else
  {
    // yes, cookie was already present
    console.log('cookie exists', req.cookies.cookieName);
  } 
  next(); // <-- important!
});


//Task Manager (talk to db)
var PM = require('./modules/parse-manager');
//SocketIO
var io = require('socket.io').listen(server);


//Routes
require('./routes/index.js')(app, PM);



io.on('connection', function(socket){
  // console.log('a user connected');
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
  socket.on('chat message', function(msg){
    // io.emit('chat message', msg);
    console.log('recieved');
    io.emit('chat message', msg);
  });

  //broadcasting..
});



server.listen(2000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
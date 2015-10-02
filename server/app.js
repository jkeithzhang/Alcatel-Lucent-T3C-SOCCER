var express = require('express');
var app = express();
var http = require('http');
var body = require('body-parser');

app.set('view engine', 'html');
app.use(body.json());


//Task Manager (talk to db)
var PM = require('./modules/parse-manager');

//Routes
require('./routes/index.js')(app, PM);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
var mysql 		= require('mysql');
var mysql_info  = require('./config').mysql;

var connection	= mysql.createConnection(mysql_info);


connection.connect();

module.exports.connection = connection;
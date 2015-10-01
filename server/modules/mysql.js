var mysql 		= require('mysql');
var mysql_info  = require('../../../config').mysql;
var nodes_info 	= require('../../../config').nodes;

var connection	= mysql.createConnection(mysql_info),
	nodes_connection = mysql.createConnection(nodes_info);


connection.connect();
nodes_connection.connect();


module.exports.connection = connection;
module.exports.nodes_connection = nodes_connection;
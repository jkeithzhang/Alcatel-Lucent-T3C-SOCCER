var mysql_dev = {
	port: 		'3306',
	host: 		'localhost',
	user: 		'root',
	password: 	'tigris',
	database: 	't3c-soccer',
	insecureAuth: true
};

exports.mysql = mysql_dev;
// exports.mysql = global.process.env.NODE_ENV === 'production' ? mysql_prod : mysql_dev;

var	db2		 	= require('./mysql').connection;

module.exports = function() {
	function parseBoolean(string) {
		switch (String(string).toLowerCase()) {
			case "true":
			case "1":
			case "yes":
			case "y":
				return true;
			case "false":
			case "0":
			case "no":
			case "n":
				return false;
			default:
				return undefined;
		}
	}

	function getSchedule(callback) {
		db2.query('SELECT * FROM schedule', function(err, rows, fields) {
			if (err) throw err;
			return callback(rows);
		});		
	}

	this.parseSchedule = function(res) {
		getSchedule(function(e) {
			res.jsonp(e);
		});
	}
}
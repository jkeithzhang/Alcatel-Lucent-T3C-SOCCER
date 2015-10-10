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

	this.parseSchedule = function(res) {
		getSchedule(function(e) {
			res.jsonp(e);
		});
	}

	this.inUpdate = function(res) {
		inUpdate(function(e) {
			res.jsonp(e);
		});
	}	

	// function been used
	function getSchedule(callback) {
		db2.query('SELECT * FROM schedule', function(err, rows, fields) {
			if (err) {
				return callback('getSchedule query error');				
			} else {
				return callback(rows);
			}
		});		
	}

	function inUpdate(callback) {
		db2.query('UPDATE schedule SET weekday=3 WHERE id=1', function(err, rows, fields) {
			if (err) {
				return callback('inUpdate query error');
			} else {
				return callback(rows);
			}
		});		
	}	
}
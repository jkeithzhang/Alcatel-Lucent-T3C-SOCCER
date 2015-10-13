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
		var result = new Array();
		db2.query('SELECT * FROM schedule', function(err, rows, fields) {
			if (err) {
				return callback('getSchedule query error');				
			} else {
				db2.query('SELECT * FROM attendance_record', function(err2, rows2, fi) {
					result.push(rows);
					result.push(rows2);
					console.log(JSON.stringify(result));
					return callback(result);
				});
			}
		});		
	}

	function inUpdate(callback) {
		db2.query("INSERT INTO attendance_record (date, white_team_flag, player) VALUES ('2015-10-12', 1, 'David')", function(err, rows, fields) {
			if (err) {
				return callback('inUpdate query error');
			} else {
				return callback(rows);
			}
		});		
	}	
}
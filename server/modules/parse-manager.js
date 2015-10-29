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

	this.page1init = function(req, res) {


		getSchedule(function(e) {
		    var cookie = req.cookies.cookieName;
		    if (cookie === undefined)
		    {
		      console.log('cookie does not exist', cookie);
			  res.jsonp('undefined');
		    } 
		    else
		    {
		      // yes, cookie already present
		      console.log('cookie exists', req.cookies.cookieName);
		      res.jsonp(e);
		    } 
		});
	}

	this.inUpdate = function(res) {
		inUpdate(function(e) {
			res.jsonp(e);
		});
	}	

	this.auth = function(req, res) {
		var name = req.query.login_name;
		var pwd = req.query.login_pwd;
		auth(name, pwd, function(e) {
			//if there is result, add cookie
			if(e.length != 0) {
				res.cookie('cookieName',name, { maxAge: 10000, httpOnly: false });
				res.jsonp(e);
			} else {
				res.jsonp('user not found');
			}
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

	function auth(login, pwd, callback) {
		db2.query("SELECT * FROM players WHERE login_name='" + login + "' AND login_pwd='" + pwd + "'", function(err, rows, fields) {
			if (err) {
				return callback('auth query error');
			} else {
				return callback(rows);
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
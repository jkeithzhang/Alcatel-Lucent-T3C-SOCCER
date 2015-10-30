var	db2		 	= require('./mysql').connection,
	_			= require('underscore');

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
		    var cookie = req.cookies;
		    if (_.isEmpty(cookie) == true) {
		      console.log('cookie does not exist', req.cookies);
			  res.jsonp('undefined');
		    } 
		    else {
		      // yes, cookie already present
		      console.log('cookie exists', req.cookies);
		      res.jsonp(e);
		    } 
		});
	}

	this.inUpdate = function(req, res) {
		inUpdate(req.cookies.login, req.cookies.firstname, function(e) {
			res.jsonp(e);
		});
	}	

	this.cancelUpdate = function(req, res) {
		cancelUpdate(req.cookies.login, req.cookies.firstname, function(e) {
			res.jsonp(e);
		});
	}

	this.auth = function(req, res) {
		var name = req.query.login_name;
		var pwd = req.query.login_pwd;
		auth(name, pwd, function(e) {
			//if there is result, add cookie
			if(e.length != 0) {
				res.cookie('login',name, { maxAge: 100000, httpOnly: true });
				res.cookie('firstname',e[0].first_name, { maxAge: 100000, httpOnly: true });
				res.cookie('lastname',e[0].last_name, { maxAge: 100000, httpOnly: true });
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

	function inUpdate(login, firstname, callback) {
		db2.query("INSERT INTO attendance_record (date, white_team_flag, player, first_name) VALUES ('2015-10-12', 0, '" + login + "', '" + firstname + "')", function(err, rows, fields) {
			if (err) {
				return callback('inUpdate query error');
			} else {
				return callback(firstname);
			}
		});		
	}	

	function cancelUpdate(login, firstname, callback) {
		db2.query("DELETE FROM attendance_record WHERE date='2015-10-12' AND player='" + login + "'", function(err, rows, fields) {
			if (err) {
				return callback('cancelUpdate query error');
			} else {
				return callback(firstname);
			}
		});		
	}	
}
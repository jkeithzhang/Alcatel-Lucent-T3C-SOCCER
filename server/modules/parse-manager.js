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
	this.removeTest = function(rel, tid, res) {
		var queryKey = 'releases.'+rel+'.tests';
		var query = {};
			query[queryKey] = {'$elemMatch': {'tid': parseInt(tid)} };
		var pullQuery = {};
			pullQuery['$pull'] = {};
			pullQuery['$pull'][queryKey] = {'tid': parseInt(tid)};

		sigTestDB.update( 
			query, 
			pullQuery,
			function(err, result) {
				if (err) console.log(err);
				else {
					res.json('done');
				}
			}
		);
	}
}
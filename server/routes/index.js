module.exports = function(app) {
/*
 * Default page
 */
	app.get('/', function (req, res) {
	  console.log('request recieved: ' + JSON.stringify(req.body)); //set headers to allow X Domain requests  
	  // res.setHeader("Access-Control-Allow-Origin", "*");
	  // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');  
	  // res.header('Access-Control-Allow-Headers', 'Content-Type');
	  res.jsonp({"hello": "world"});
	});

/*
 * All others
 */
 	app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

}

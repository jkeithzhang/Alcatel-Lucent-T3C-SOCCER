module.exports = function(app, PM) {
/*
 * Default page
 */
	app.get('/', function (req, res) {
	  // console.log('request recieved: ' + JSON.stringify(req.body)); //set headers to allow X Domain requests  
	  // res.setHeader("Access-Control-Allow-Origin", "*");
	  // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');  
	  // res.header('Access-Control-Allow-Headers', 'Content-Type');
	  new PM().parseSchedule(res);
	});

/*
 * All others
 */
 	// app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

}

module.exports = function(app, PM) {
/*
 * Default page
 */
	app.get('/', function (req, res) {
	  // console.log('request recieved: ' + JSON.stringify(req.body)); //set headers to allow X Domain requests  
	  // res.setHeader("Access-Control-Allow-Origin", "*");
	  // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');  
	  // res.header('Access-Control-Allow-Headers', 'Content-Type');
	  // console.log('Cookies: '+JSON.stringify(req.cookies));
	  new PM().page1init(req, res);
	});

	app.get('/in-update', function (req, res) {
	  new PM().inUpdate(res);
	});
/*
 * All others
 */
 	// app.get('*', function(req, res) { res.render('404', { title: 'Page Not Found'}); });

}

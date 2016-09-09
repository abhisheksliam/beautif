var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8082;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.json('API for code beautif viewer - browse/viewer or post data with req.data.content');
});

app.post('/viewer', function(req, res) {
	//res.set('Content-Type', 'application/javascript');
	if (req.data && req.data.content) {
		res.render('index.ejs', { content :req.data.content});
	} else {
		res.render('index.ejs', { content :"null"});
	}
});

app.get('/viewer', function(req, res) {
		res.render('index.ejs', { content :"null"});
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
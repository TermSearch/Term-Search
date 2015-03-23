var express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	compression = require('compression'),
	minify = require('express-minify');

var app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/termworld-2015-v3');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("Connection MongoDB succesful!");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Use compression for responses
app.use(compression());

app.use(express.static(__dirname + '/public'));

switch (app.get('env')) {
	case 'development':
		// compact, colorful dev logging
		app.use(require('morgan')('dev'));
		// Make sure html is human readable
		app.locals.pretty = true;
		break;
	case 'production':
		// module 'express-logger' supports daily log rotation
		app.use(require('express-logger')({
			path: __dirname + '/log/requests.log'
		}));
		// Minify Javascript files in public folder (works for css as well?)
		// app.use(minify());
		break;
}


require('./routes/routes.js')(app);

app.listen(app.get('port'), function() {
	console.log('Express started in ' +
		app.get('env') + ' mode on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.\n' +
		'Status view cache: ' + app.get('view cache') +'.\n'
	);
});

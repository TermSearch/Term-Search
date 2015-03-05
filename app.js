var express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	compression = require('compression'),
	minify = require('express-minify');

var app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/termworld');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("Connection MongoDB succesful!");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Attempts to speed things up
app.set('view cache', true); // caching, turn off in development, turned on in production?
app.use(compression());
app.use(minify());
app.locals.pretty = false; // Disable this when in production!!


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


require('./routes/routes.js')(app);

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});

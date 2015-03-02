/*
 * Module dependencies
 */
var express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log("Connection MongoDB succesful!");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.locals.pretty = true; // Disable this when in production!!

require('./routes.js')(app);

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});

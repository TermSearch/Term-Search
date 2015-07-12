var express = require('express'),
	morgan = require('morgan'),
	mongoose = require('mongoose'),
	compression = require('compression'),
	app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/termworld');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
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
	break;
}

app.use(function (req, res, next) {
	var cluster = require('cluster');
	if (cluster.isWorker) console.log('Worker %d received request',
		cluster.worker.id);
	next();
});

require('./routes/routes.js')(app);

function startServer() {
	app.listen(app.get('port'), function () {
		console.log('Express started in ' + app.get('env') +
			' mode on http://localhost:' + app.get('port') +
			'; press Ctrl-C to terminate. ' +
			'Status view cache: ' + app.get('view cache') + '.\n'
		);
	});
}
if (require.main === module) {
	// application run directly; start app server startServer();
	startServer();
} else {
	// application imported as a module via "require": export function // to create server
	module.exports = startServer;
}

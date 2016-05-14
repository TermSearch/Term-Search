var express = require('express');
var	morgan = require('morgan');
var	mongoose = require('mongoose');
var	compression = require('compression');
var	app = express();
var config = require('./config/config.json');

app.set('port', process.env.PORT || config.app.defaultPort);

mongoose.connect(config.db.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, '[APP] MongoDB connection error:'));
db.once('open', function (callback) {
	console.log("[APP] Connection MongoDB succesful!");
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Use compression for responses
app.use(compression());

// Static content
// TODO: move under other routes for better performance?
app.use(express.static(__dirname + '/public'));

switch (app.get('env')) {
case 'development':
	// compact, colorful dev logging
	app.use(require('morgan')('dev'));
	// Make sure html is human readable
	app.locals.pretty = true;
	// manifest from webpack for web client
	app.locals.clienturl = config.client.dev.url;
	app.locals.manifest = require(config.client.dev.path + config.client.dev.manifest);
	break;
case 'production':
	// module 'express-logger' supports daily log rotation
	app.use(require('express-logger')({
		path: __dirname + '/log/requests.log'
	}));
	// manifest from webpack for web client
	app.locals.clienturl = config.client.prod.path;
	app.locals.manifest = require(config.client.prod.path + config.client.prod.manifest);
	break;
}

app.use(function (req, res, next) {
	var cluster = require('cluster');
	if (cluster.isWorker) console.log('[APP] Worker %d received a request on port %d',
		cluster.worker.id, app.get('port'));
	next();
});

require('./routes/routes.js')(app);

function startServer() {
	app.listen(app.get('port'), function () {
		console.log('[APP] '+ new Date() +': Express started in ' + app.get('env') +
			' mode on http://localhost:' + app.get('port')
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

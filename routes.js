var main = require('./handlers/main.js'),
	TermEntry = require('./termEntry'),
	SubjectField = require('./modules/SubjectField');

module.exports = function(app) {

	app.use(function(req, res, next) {
		res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
	});

	app.get('/', main.home);

	app.param('sf', function(req, res, next, sf) {
		sf = sf.split('_').join(' '); // replace underscore in html with space
		var sfNr = SubjectField.getSubjectFieldNr(sf);
		if (sfNr) {
			var t0 = Date.now(); // log start time
			TermEntry.findBySubjectField(sfNr, function(err, termArray) {
				if (err) {
					next(err);
				} else {
					req.termArray = termArray;
					req.sf = sf;
					var t1 = Date.now();
					req.totalTime = (t1 - t0);
					next();
				}
			});
		} else {
			var reqErr = new Error('Vakgebied niet gevonden!');
			reqErr.status = 404;
			next(reqErr);
		}
	});

	app.param('term', function(req, res, next, term) {
		term = term.split('_').join(' '); // replace underscore in html with space
		var t0 = Date.now(); // log start time
		TermEntry.findByStr(term, function(err, termEntries) {
			if (err) {
				next(err);
			} else if (termEntries.length > 0) {
				req.termEntries = termEntries;
				req.deStr = term;
				var t1 = Date.now();
				req.totalTime = (t1 - t0);
				next();
			} else {
				var reqErr = new Error('Term "' + req.params.term + '" niet gevonden!');
				reqErr.status = 404;
				next(reqErr);
			}
		});
	});

	app.get('/', function(req, res) {
		res.render('index', {
			totalTime: 0
		});
	});

	app.get('/duits-nederlands/', function(req, res) {
		var t0 = Date.now(); // log start time
		TermEntry.find1K(function(err, termArray) {
			if (err) {
				next(err);
			} else {
				var t1 = Date.now();
				// console.log(t1 - t0); // log end time
				totalTime = (t1 - t0);
				res.render('terms', {
					termArray: termArray,
					totalTime: totalTime
				});
			}
		});
	});

	app.get('/duits-nederlands/vakgebied/', function(req, res) {
		res.render('subjectfields', {
			subjectFields: SubjectField.getAll(),
			totalTime: 0
		});
	});

	app.get('/duits-nederlands/:term', function(req, res) {
		res.render('term', {
			deStr: req.deStr,
			termEntries: req.termEntries,
			totalTime: req.totalTime
		});
	});

	app.get('/duits-nederlands/vakgebied/:sf', function(req, res) {
		res.render('subjectfield', {
			sf: req.sf,
			termArray: req.termArray,
			totalTime: req.totalTime
		});
	});

	// Handle 404
	app.use(function(req, res) {
		res.status(400);
		res.render('404.jade', {
			error: '404'
		});
	});

	// Handle 500
	app.use(function(error, req, res, next) {
		if (error.status === 404) {
			res.status(404);
			res.render('404.jade', {
				error: error
			});
		} else {
			res.status(500);
			res.render('500.jade', {
				error: error
			});
		}
	});



};

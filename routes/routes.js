var main = require('../handlers/main'),
	api = require('../handlers/api');

module.exports = function(app) {

	app.use(function(req, res, next) {
		res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
	});

	app.get('/', main.home);

	app.get('/api/', api.getTermEntries);

	app.get('/duits-nederlands/vakgebied/', main.subjectFieldList);

	app.get('/duits-nederlands/vakgebied/:vakgebied', main.subjectField);

	// app.get('/duits-nederlands/vakgebied/:sf', function(req, res) {
	// 	res.render('subjectfield', {
	// 		sf: req.sf,
	// 		termArray: req.termArray,
	// 		totalTime: req.totalTime
	// 	});
	// });

	app.get('/duits-nederlands/', main.dutchGerman);

	app.get('/duits-nederlands/:term', main.dutchGermanTerm);

	// app.param('sf', function(req, res, next, sf) {
	// 	sf = sf.split('_').join(' '); // replace underscore in html with space
	// 	var sfNr = SubjectField.getSubjectFieldNr(sf);
	// 	if (sfNr) {
	// 		var t0 = Date.now(); // log start time
	// 		TermEntry.findBySubjectField(sfNr, function(err, termArray) {
	// 			if (err) {
	// 				next(err);
	// 			} else {
	// 				req.termArray = termArray;
	// 				req.sf = sf;
	// 				var t1 = Date.now();
	// 				req.totalTime = (t1 - t0);
	// 				next();
	// 			}
	// 		});
	// 	} else {
	// 		var reqErr = new Error('Vakgebied niet gevonden!');
	// 		reqErr.status = 404;
	// 		next(reqErr);
	// 	}
	// });
	//
	// app.param('term', function(req, res, next, term) {
	// 	term = term.split('_').join(' '); // replace underscore in html with space
	// 	var t0 = Date.now(); // log start time
	// 	TermEntry.findByStr(term, function(err, termEntries) {
	// 		if (err) {
	// 			next(err);
	// 		} else if (termEntries.length > 0) {
	// 			req.termEntries = termEntries;
	// 			req.deStr = term;
	// 			var t1 = Date.now();
	// 			req.totalTime = (t1 - t0);
	// 			next();
	// 		} else {
	// 			var reqErr = new Error('Term "' + req.params.term + '" niet gevonden!');
	// 			reqErr.status = 404;
	// 			next(reqErr);
	// 		}
	// 	});
	// });
	//

	//
	// app.get('/duits-nederlands/vakgebied/:sf', function(req, res) {
	// 	res.render('subjectfield', {
	// 		sf: req.sf,
	// 		termArray: req.termArray,
	// 		totalTime: req.totalTime
	// 	});
	// });
	//

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

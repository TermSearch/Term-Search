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

	app.get('/duits-nederlands/', main.dutchGerman);

	app.get('/duits-nederlands/:term', main.dutchGermanTerm);

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

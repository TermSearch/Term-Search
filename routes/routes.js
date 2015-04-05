var main = require('../handlers/main'),
	api = require('../handlers/api');

module.exports = function(app) {

	app.use(function(req, res, next) {
		res.locals.production = app.get('env') === 'production';
		res.locals.development = app.get('env') === 'development';
    next();
	});

	app.get('/', main.home);

	app.get('/api/', api.getTermEntries);

	app.get('/colofon', main.colofon);

	app.get('/duits-nederlands/vakgebied/', main.subjectFieldList);

	app.get('/duits-nederlands/vakgebied/:vakgebied', main.subjectField);

	app.get('/duits-nederlands/', main.dutchGerman);

	app.get('/duits-nederlands/:term', main.dutchGermanTerm);

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

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

	app.get('/woordenboeken', main.woordenboeken);

	app.get('/duits-nederlands/vakgebied/', main.allSubjectFields);

	app.get('/duits-nederlands/vakgebied/:vakgebied', main.subjectField);

	app.get('/duits-nederlands/', main.showPagesOverview);

	app.get('/duits-nederlands/pagina/:pageNumber', main.showPage);

	app.get('/duits-nederlands/:term', main.de_nl_translation);

	app.get('/duits-nederlands/id/:id', main.dutchGermanId);

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

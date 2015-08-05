var main = require('../handlers/main'),
	api = require('../handlers/api');

module.exports = function(app) {

	app.use(function(req, res, next) {
		res.locals.production = app.get('env') === 'production';
		res.locals.development = app.get('env') === 'development';
    next();
	});

	// Homepage
	app.get('/', main.home);

	// API
	app.get('/api/', api.getTranslations);

	// Footer links
	app.get('/colofon', main.colofon);
	app.get('/woordenboeken', main.woordenboeken);

	// German to Dutch related
	app.get('/duits-nederlands/vakgebied/', main.de_nl_vakgebied_alle);
	app.get('/duits-nederlands/vakgebied/:vakgebied', main.de_nl_vakgebied);
	app.get('/duits-nederlands/', main.de_nl_alle);
	app.get('/duits-nederlands/pagina/:pageNumber', main.de_nl_page);
	app.get('/duits-nederlands/:term', main.de_nl_translation);
	app.get('/duits-nederlands/id/:id', main.de_nl_id);

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

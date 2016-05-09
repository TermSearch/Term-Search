var main = require('../handlers/main');
var	search = require('../handlers/search');
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app) {

	app.use(function(req, res, next) {
		res.locals.production = app.get('env') === 'production';
		res.locals.development = app.get('env') === 'development';
    next();
	});

	// Homepage
	app.get('/', main.home);

	// Post search request
	app.post('/search', urlencodedParser, search.query);

	// Search page
	app.get('/search', urlencodedParser, search.searchpage);

		// Footer links
	app.get('/colofon', main.colofon);
	app.get('/woordenboeken', main.woordenboeken);

	// German to Dutch related
	app.get('/duits-nederlands/vakgebied/', main.de_nl_vakgebied_alle);
	app.get('/duits-nederlands/vakgebied/:vakgebied', main.de_nl_vakgebied);
	app.get('/duits-nederlands/', main.de_nl_alle);
	app.get('/duits-nederlands/pagina/:pageNumber', main.de_nl_page);

	app.get('/duits-nederlands/voorbeeldzin/', main.de_nl_sentence);

	app.get('/duits-nederlands/:term', main.de_nl_translation);
	app.get('/duits-nederlands/id/:id', main.id_redirect);	// old id page
	app.get('/id/:id', main.de_nl_id);

	// Handle 404
	app.use(main.notFound);

	// Handle 500 page
	app.use(main.serverError);

};

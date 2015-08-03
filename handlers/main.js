var SubjectField = require('../models/subjectFieldModel'),
	TermEntry = require('../models/termEntryModel'),
	DictEntry = require('../models/dictEntryModel'),
	url = require('../lib/url');

exports.home = function (req, res) {
	res.render('home');
};

exports.colofon = function (req, res) {
	res.render('colofon');
};

exports.woordenboeken = function (req, res) {
	res.render('woordenboeken');
};

// Renders a list of all subjectFields to page /duits-nederlands/vakgebied/
exports.de_nl_vakgebied_alle = function (req, res) {
	res.render('de-nl-vakgebied-alle', {
		subjectFields: SubjectField.getAll()
	});
};

// Finds the first 1000 terms for a certain subjectField
// And renders them to the page /duits-nederlands/vakgebied/xxx
exports.de_nl_vakgebied = function (req, res, next) {
	var subjectFieldStr = url.decodeSlug(req.params.vakgebied);
	var subjectFieldNr = SubjectField.toNr(subjectFieldStr);
	TermEntry.find({
			subjectField: {
				$all: [subjectFieldNr]
			}
		})
		.limit(1000)
		.exec()
		.then(TermEntry.getGermanTranslations)
		.then(url.encodeSlugArr)
		.then(function (termArray) {
			res.render('de_nl_vakgebied', {
				sf: subjectFieldStr,
				termArray: termArray
			});
		})
		.then(null, function (err) {
			res.send(500, 'Er is iets mis met de database.');
			res.send(err);
		});
};

// Finds the first 1000 german terms in the database
// and renders them to the page /duits-nederlands/
exports.de_nl_page = function (req, res, next) {
	var requestedPage = parseInt(req.params.pageNumber, 10);
	if (isNaN(requestedPage)) next();
		else DictEntry.getPage(requestedPage)
		.then(function (dictEntries) {
			if (dictEntries) {
				res.render('de-nl-page', {
					requestedPage: requestedPage,
					dictEntries: dictEntries
				});
			} else next(); // no more pages found, fallback to 404, not found
		})
		.then(null, function (err) {
			next(err);
		});
};

// Finds the first 1000 german terms in the database
// and renders them to the page /duits-nederlands/
exports.de_nl_alle = function (req, res, next) {
	DictEntry.getTotalPages()
		.then(function (totalPages) {
			res.render('de-nl-alle', {
				totalPages: totalPages
			});
		})
		.then(null, function (err) {
			next(err);
		});
};

// Reads the requested term from the url in the request parameters
// Converts this url to a normal string (without underscores etc.)
// Searches the database for this string
exports.de_nl_translation = function (req, res, next) {
	// convert url slug to term string format
	// i.e. replace underscores with space etc.
	var germanStr = url.decodeSlug(req.params.term);
	DictEntry.findTranslation(germanStr)
		.then(function (dictEntries) {
			// if dictEntries found, render jade file
			if (dictEntries) {
				res.render('de-nl-translation', {
					germanStr: germanStr,
					dictEntries: dictEntries
				});
			} else next(); // else no entries found, fallback to 404, not found
		})
		.then(null, function (err) {
			next(err);
		});
};

exports.de_nl_id = function (req, res, next) {
	TermEntry.find({
			'id': req.params.id
		})
		.exec()
		.then(TermEntry.separateLanguages)
		.then(function (termEntries) {
			if (termEntries.length > 0) {
				res.render('de_nl_id', {
					termEntry: termEntries[0] // id's are unique, so only 1 termEntry in array
				});
			} else next(); // no entry found, fallback to 404, not found
		})
		.then(null, function (err) {
			next(err);
		});
};

exports.notFound = function (req, res, next) {
	res.status(404);
	res.render('errors/404.jade');
};

exports.serverError = function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('errors/500.jade');
};

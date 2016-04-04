var	DictEntry = require('../models/dictEntryModel');
var SubjectField = require('../models/subjectFieldModel');
var url = require('../lib/url');

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
		subjectFields: DictEntry.getAllSubjectFields()
	});
};

// Finds the first 1000 terms for a certain subjectField
// And renders them to the page /duits-nederlands/vakgebied/xxx
exports.de_nl_vakgebied = function (req, res, next) {
	var subjectFieldStr = url.decodeSlug(req.params.vakgebied);
	var isSubjectField = (SubjectField.toNr(subjectFieldStr) > -1);
	DictEntry.findBySubjectField(subjectFieldStr)
		.then(function (dictEntries) {
			if (dictEntries || isSubjectField) {
				res.render('de-nl-vakgebied', {
					dictEntries: dictEntries || [],
					subjectFieldStr: subjectFieldStr
				});
			} else next(); // no more pages found, fallback to 404, not found
		})
		// Pass error on to next()
		.then(null, next);
};

// Finds the first 1000 german terms in the database
// and renders them to the page /duits-nederlands/
exports.de_nl_page = function (req, res, next) {
	var requestedPageNr = parseInt(req.params.pageNumber, 10);
	if (isNaN(requestedPageNr)) next();
	else DictEntry.getPage(requestedPageNr)
		.then(function (dictEntries) {
			if (dictEntries) {
				res.render('de-nl-page', {
					requestedPageNr: requestedPageNr,
					dictEntries: dictEntries
				});
			} else next(); // no more pages found, fallback to 404, not found
		})
		// Pass error on to next()
		.then(null, next);
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
		// Pass error on to next()
		.then(null, next);
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
			} else {
				res.render('de-nl-notfound', {
					germanStr: germanStr
				});
			}
		})
		// Pass error on to next()
		.then(null, next);
};


// Redirect old id page to new
exports.id_redirect = function (req, res, next) {
	var id = req.params.id;
	res.redirect('/id/'+id);
};

// Displays detailed information about dictEntry
// Including a link to the IATE page of the term
exports.de_nl_id = function (req, res, next) {
	DictEntry.findById(req.params.id)
		.then(function (dictEntries) {
			if (dictEntries.length > 0) {
				res.render('de-nl-id', {
					dictEntry: dictEntries[0] // only 1 termEntry in array
				});
			} else next(); // no entry found, fallback to 404, not found
		})
		.then(null, next);
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

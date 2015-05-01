var SubjectField = require('../models/subjectFieldModel'),
	TermEntry = require('../models/termEntryModel'),
	url = require('../lib/url');

exports.home = function(req, res) {
	res.render('index');
};

exports.colofon = function(req, res) {
	res.render('colofon');
};

exports.subjectFieldList = function(req, res) {
	res.render('all-subjectfields', {
		subjectFields: SubjectField.getAll()
	});
};

exports.subjectField = function(req, res, next) {
	var sfStr = url.decodeSlug(req.params.vakgebied);
	var sfNr = SubjectField.getSubjectFieldNr(sfStr);
	TermEntry.find({
			subjectField: {
				$all: [sfNr]
			}
		})
		.limit(1000)
		.exec()
		.then(TermEntry.getGermanTranslations)
		.then(url.encodeSlugArr)
		.then(function(termArray) {
			res.render('subjectfield', {
				sf: sfStr,
				termArray: termArray
			});
		})
		.then(null, function(err) {
			res.send(500, 'Er is iets mis met de database.');
			res.send(err);
		});
};

exports.dutchGerman = function(req, res) {
	TermEntry.find()
		.limit(1000)
		.exec()
		.then(TermEntry.getGermanTranslations)
		.then(url.encodeSlugArr)
		.then(function(termArray) {
			res.render('dutch-german', {
				termArray: termArray
			});
		})
		.then(null, function(err) {
			res.send(500, 'Er is iets mis met de database.');
			res.send(err);
		});
};

exports.dutchGermanTerm = function(req, res, next) {
	// convert url slug to term string format
	// i.e. replace underscores with space etc.
	var termStr = url.decodeSlug(req.params.term);
	TermEntry.find({
			'langSet': {
				$elemMatch: {
					lang: 'de',
					termStr: termStr
				}
			}
		})
		.exec()
		.then(TermEntry.getDictionaryEntries)
		.then(function(translations) {
			if (translations.length > 0) {
				res.render('dutch-german-term', {
					termStr: termStr,
					translations: translations
				});
			} else next(); // not entries found, fallback to 404, not found
		})
		.then(null, function(err) {
			next(err);
		});
};


exports.dutchGermanId = function(req, res, next) {
	TermEntry.find({
			'id': req.params.id
		})
		.exec()
		.then(TermEntry.separateLanguages)
		.then(function(termEntries) {
			if (termEntries.length > 0) {
				res.render('dutch-german-id', {
					termEntry: termEntries[0] // id's are unique, so only 1 termEntry in array
				});
			} else next(); // not entries found, fallback to 404, not found
		})
		.then(null, function(err) {
			next(err);
		});
};

exports.notFound = function(req, res, next) {
	res.status(404);
	res.render('errors/404.jade');
};

exports.serverError = function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('errors/500.jade');
};

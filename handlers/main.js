var SubjectField = require('../models/subjectFieldModel'),
	TermEntry = require('../models/termEntryModel'),
	url = require('../lib/url');

exports.home = function(req, res) {
	res.render('index');
};

exports.subjectFieldList = function(req, res) {
	res.render('allsubjectfields', {
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
			res.render('dutchgerman', {
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
		.then(function(termEntries) {
			if (termEntries.length > 0) {
				termEntries = termEntries.map(function(termEntry) {
					// Convert subjectField numbers to array of strings
					var subjectFieldStrs = SubjectField.getSubjectFieldStrs(termEntry.subjectField);
					// Generate URL for these strings
					var subjectFieldsWithURLs = url.encodeSlugArr(subjectFieldStrs);
					return {
						id: termEntry.id,
						subjectFields: subjectFieldsWithURLs,
						de: termEntry.getTranslations('de'),
						nl: termEntry.getTranslations('nl')
					};
				});
				res.render('dutchgermanterm', {
					deStr: termStr,
					termEntries: termEntries
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

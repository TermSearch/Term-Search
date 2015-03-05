var SubjectField = require('../models/subjectFieldModel'),
	TermEntry = require('../models/termEntryModel'),
	url = require('../lib/url');

exports.home = function(req, res) {
	res.render('index', {
		totalTime: 0,
		pageTestScript: '/qa/tests-home.js'
	});
};

exports.subjectFieldList = function(req, res) {
	res.render('subjectfields', {
		subjectFields: SubjectField.getAll(),
		totalTime: 0
	});
};

exports.subjectField = function(req, res, next){
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
				termEntries = termEntries.map(function(t) {
					return {
						id: t.id,
						subjectField: t.subjectField,
						langSet: t.langSet
					};
				});

				res.render('dutchgermanterm', {
					termEntries: termEntries
				});

			} else {
				next();
			}

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

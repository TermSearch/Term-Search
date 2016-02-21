var mongoose = require('mongoose'),
	Schemas = require('./Schemas.js'),
	SubjectField = require('../models/subjectFieldModel'),
	url = require('../lib/url');

var resolveSubjectFields = function (dictEntries) {
	// return false if no results
	if (dictEntries.length === 0) return false;
	return dictEntries.map(function (dictEntry) {
		// resolve [12, 44] to ["example subjectField", "second ..."]
		var subjectFieldsAsStrings = SubjectField.toStrArr(dictEntry.subjectFields);
		// convert ["str", "str"] to [{ str, url}, {str, url}]
		var subjectFieldsWithURLs = url.encodeSlugArr(subjectFieldsAsStrings);
		var deUrl = url.encodeSlug(dictEntry.de);
		return {
			id: dictEntry.id,
			de: dictEntry.de,
			deUrl: deUrl,
			nl: dictEntry.nl,
			note: dictEntry.note || '',
			subjectFields: subjectFieldsWithURLs
		};
	});
};

var dictEntryModel = function () {
	var dictEntrySchema = Schemas.dictEntrySchema;

	// If PORT varialbe is not set to production, assume development
	if (process.env.PORT != 'production') {
		// activate debugging info for database
		// mongoose.set('debug', true);
		// automatically check indexing status database at startup
		dictEntrySchema.set('autoIndex', true);
	}

	// Returns an array of all subjectFields
	dictEntrySchema.statics.getAllSubjectFields = function () {
		return SubjectField.getAll();
	};

	// Finds the first 1000 dictEntries of a subjectFieldStr e.g. "Recht"
	dictEntrySchema.statics.findBySubjectField = function (subjectFieldStr) {
		var subjectFieldNr = SubjectField.toNr(subjectFieldStr);
		return this.find({
				subjectFields: {
					$all: [subjectFieldNr]
				}
			})
			.limit(1000)
			.exec()
			.then(resolveSubjectFields)
			.then(function (dictEntries) {
				return dictEntries;
			});
	};

	// Finds the first 10 dictEntries of a string sourceWord e.g. "Anlage"
	dictEntrySchema.statics.findTranslationByRegex = function (regexQuery) {
		return this.find({
				'de': regexQuery
			})
			.limit(50)
			.exec()
			.then(resolveSubjectFields)
			.then(function (dictEntries) {
				return dictEntries;
			});
	};

	// Finds the first 10 dictEntries of a string sourceWord e.g. "Anlage"
	dictEntrySchema.statics.findTranslation = function (sourceWord) {
		return this.find({
				'de': sourceWord
			})
			.limit(50)
			.exec()
			.then(resolveSubjectFields)
			.then(function (dictEntries) {
				return dictEntries;
			});
	};

	// Returns the dictEntries for the requested page number
	// Returns a promise with dictEntries in the callback
	dictEntrySchema.statics.getPage = function (number) {
		var resultsPerPage = 100;
		var pageNumber = number;
		return this.find({})
			// .sort('de')
			.skip(resultsPerPage * pageNumber)
			.limit(resultsPerPage)
			.exec()
			.then(resolveSubjectFields)
			.then(function (dictEntries) {
				return dictEntries;
			});
	};

	// Returns the total number of pages
	dictEntrySchema.statics.getTotalPages = function () {
		var resultsPerPage = 100;
		return this.count({})
			.exec()
			.then(function (count) {
				return Math.floor(count / resultsPerPage);
			});
	};

	return mongoose.model('DictEntry', dictEntrySchema);
};

module.exports = new dictEntryModel();

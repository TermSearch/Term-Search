var mongoose = require('mongoose'),
	Schemas = require('./Schemas.js'),
	SubjectField = require('../models/subjectFieldModel'),
	url = require('../lib/url');

var dictEntryModel = function () {
	var dictEntrySchema = Schemas.dictEntrySchema;

	// If PORT varialbe is not set to production, assume development
	if (process.env.PORT != 'production') {
		// activate debugging info for database
		// mongoose.set('debug', true);
		// automatically check indexing status database at startup
		dictEntrySchema.set('autoIndex', true);
	}

	// Returns an array of German STRINGS for all termEntries in the array
	// e.g. getTranslations(termEntries) returns all the German strings
	dictEntrySchema.statics.findTranslation = function (sourceWord) {
		return this.find({
				'de': sourceWord
			})
			.limit(10)
			.exec()
			.then(function (dictEntries) {
				// return false if no results
				if (dictEntries.length === 0) return false;
				return dictEntries.map(function (dictEntry) {
					// resolve [12, 44] to ["example subjectField", "second ..."]
					var subjectFieldsAsStrings = SubjectField.toStrArr(dictEntry.subjectFields);
					return {
						id: dictEntry.id,
						de: dictEntry.de,
						nl: dictEntry.nl,
						note: dictEntry.note || '',
						subjectFields: subjectFieldsAsStrings
					};
				});
			});
	};

	return mongoose.model('DictEntry', dictEntrySchema);
};

module.exports = new dictEntryModel();

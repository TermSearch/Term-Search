var mongoose = require('mongoose');
var	Schemas = require('./Schemas.js');
var SubjectField = require('../models/subjectFieldModel');
var	url = require('../lib/url');

var termEntryModel = function() {

	var termEntrySchema = Schemas.termEntrySchema;

	// If PORT varialbe is not set to production, assume development
	if (process.env.PORT != "production") {
		// activate debugging info for database
		// mongoose.set('debug', true);
		// automatically check indexing status database at startup
		termEntrySchema.set('autoIndex', true);
	}

	// Returns an array of TERM OBJECTS for the specified language
	// e.g. getTranslations('de') returns all the german objects
	termEntrySchema.methods.getTranslations = function(language) {
		return this.langSet.filter(function(term) {
			return term.lang === language;
		});
	};

	// returns an array of objects
	// with separate arrays for Dutch and German terms
	// for each term entry id
	// subjectfields are also converted to strings + urls
	termEntrySchema.statics.separateLanguages = function(termEntries) {
		return termEntries.map(function(termEntry) {
			// Convert subjectField numbers to array of strings
			var subjectFieldStrs = SubjectField.toStrArr(termEntry.subjectField);
			// Generate URL for these strings
			var subjectFieldsWithURLs = url.encodeSlugArr(subjectFieldStrs);
			return {
				id: termEntry.id,
				subjectFields: subjectFieldsWithURLs,
				de: termEntry.getTranslations('de'),
				nl: termEntry.getTranslations('nl')
			};
		});
	};

	return mongoose.model('TermEntry', termEntrySchema);
};

module.exports = new termEntryModel();

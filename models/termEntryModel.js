var mongoose = require('mongoose'),
	Schemas = require('./Schemas.js');

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

	// Returns an array of German STRINGS for all termEntries in the array
	// e.g. getTranslations(termEntries) returns all the German strings
	termEntrySchema.statics.getGermanTranslations = function(termEntries) {
		var germanTerms = [];
		termEntries.forEach(function(termEntry) {
			var translations = termEntry.getTranslations('de');
			germanTerms = germanTerms.concat(translations);
		});

		return germanTerms.map(function(term) {
			return term.termStr;
		});
	};

	return mongoose.model('TermEntry', termEntrySchema);

};

module.exports = new termEntryModel();

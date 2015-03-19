var mongoose = require('mongoose'),
	Schemas = require('./Schemas.js');

var termEntryModel = function() {

	var termEntrySchema = Schemas.termEntrySchema;

	termEntrySchema.index({
		'langSet.termStr': 'text'
	}, {
		default_language: 'german'
	});

  mongoose.set('debug', true);

	termEntrySchema.set('autoIndex', true); // set this to false in production

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

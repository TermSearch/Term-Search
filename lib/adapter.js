var SubjectField = require('../models/subjectFieldModel'),
	TermEntry = require('../models/termEntryModel'),
	url = require('./url');

exports.convertTermEntries = function(termEntries) {
	return termEntries.map(function(termEntry) {
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
};

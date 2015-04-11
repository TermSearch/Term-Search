var TermEntryModel = require('../models/termEntryModel'),
	SubjectField = require('../models/subjectFieldModel'),
	url = require('../lib/url');

exports.getTermEntries = function(req, res) {
	TermEntryModel.find({
			$text: {
				$search: req.query.termstr
			}
		})
		.limit(20)
		.exec(function(err, termEntries) {
			if (err) {
				res.json(err);
			} else {
				res.setHeader('Content-Type', 'application/json');
				res.json(termEntries.map(function(termEntry) {

					// Convert subjectField numbers to array of strings
					var subjectFieldStrs = SubjectField.getSubjectFieldStrs(termEntry.subjectField);
					// Generate URL for these strings
					var subjectFieldsWithURLs = url.encodeSlugArr(subjectFieldStrs);
					var dutchTerms = termEntry.getTranslations('nl');
					var germanTerms = termEntry.getTranslations('de');

					return {
						id: termEntry.id,
						subjectFields: subjectFieldsWithURLs,
						de: germanTerms,
						nl: dutchTerms
					};
				}));
			}
		});
};

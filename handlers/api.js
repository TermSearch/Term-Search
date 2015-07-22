var TermEntry = require('../models/termEntryModel'),
	SubjectField = require('../models/subjectFieldModel'),
	url = require('../lib/url');

exports.getTermEntries = function (req, res) {
	TermEntry.find({
			$text: {
				$search: req.query.termStr
			}
		})
		.limit(20)
		.exec()
		.then(TermEntry.separateLanguages)
		.then(function (err, termEntries) {
			if (err) {
				res.json(err);
			} else {
				res.setHeader('Content-Type', 'application/json');
				res.json(termEntries);
			}
		});
};

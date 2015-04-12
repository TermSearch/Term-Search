var TermEntryModel = require('../models/termEntryModel'),
	SubjectField = require('../models/subjectFieldModel'),
	url = require('../lib/url'),
	adapter = require('../lib/adapter');

exports.getTermEntries = function(req, res) {
	TermEntryModel.find({
			$text: {
				$search: req.query.termstr
			}
		})
		.limit(20)
		.exec()
		.then(adapter.convertTermEntries)
		.then(function(err, termEntries) {
			if (err) {
				res.json(err);
			} else {
				res.setHeader('Content-Type', 'application/json');
				res.json(termEntries);
			}
		});
};

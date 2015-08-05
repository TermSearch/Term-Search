var DictEntry = require('../models/dictEntryModel');

exports.getTranslations = function (req, res) {
	DictEntry.findTranslation(req.query.termStr)
		.then(function (dictEntries) {
			// if dictEntries found, render jade file
			if (dictEntries) {
				res.setHeader('Content-Type', 'application/json');
				res.json(dictEntries);
			} else next(); // else no entries found
		})
		.then(null, function (err) {
			res.json(err);
		});
};

var TermEntryModel = require('../models/termEntryModel');

exports.getTermEntries = function(req, res) {
	TermEntryModel.find({
			$text: {
				$search: "Anlage" //req.query.termstr
			}
		})
		.limit(20)
		.exec(function(err, termEntries) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(termEntries.map(function(t) {
					return {
						id: t.id,
						subjectField: t.subjectField,
						langSet: t.langSet
					};
				}));
			}
		});
};

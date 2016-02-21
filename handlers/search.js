'use strict';

var DictEntry = require('../models/dictEntryModel');
var url = require('../lib/url');

exports.query = function (req, res) {
	if (!req.body) return res.sendStatus(400)
	res.redirect('/duits-nederlands/' + req.body.q);
};

const filterDuplicates = (dictEntries) => {
	const onlyUniques = [];
	dictEntries.forEach((entry, i) => {
		let unique = true;
		if (onlyUniques.forEach((uniqueEntry) => {
				if (uniqueEntry.de === entry.de) unique = false;
			}));
		if (unique) onlyUniques.push(entry);
	});
	return onlyUniques;
};

exports.searchpage = (req, res, next) => {
	const term = req.query.term;
	const regexQuery = new RegExp('^' + term, 'i');
	DictEntry.findTranslationByRegex(regexQuery)
		.then(function (dictEntries) {
			// if dictEntries found, render jade file
			if (dictEntries) {
        // Filter out duplicate search results
				let onlyUniques = filterDuplicates(dictEntries);
				res.render('de-nl-searchpage', {
					dictEntries: onlyUniques,
					searchTerm: term
				})
			} else {
				res.render('de-nl-notfound', {
					germanStr: term
				});
			}
		})
    // Pass error on to next()
    .then(null, next);
}

// For tests
exports.filterDuplicates = filterDuplicates;

'use strict';

var DictEntry = require('../models/dictEntryModel');
var url = require('../lib/url');

//
// REACT + COMPONENTS
//
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var SearchPanel = require('../components/SearchPanel.jsx');


exports.query = function (req, res) {
	if (!req.body) return res.sendStatus(400)
	res.redirect('/search?term=' + req.body.q);
};

const mergeDuplicates = (dictEntries) => {
	const onlyUniques = [];
	dictEntries.forEach((entry, i) => {
		let unique = true;
		if (onlyUniques.forEach((uniqueEntry) => {
				if (uniqueEntry.de === entry.de) {
					unique = false;
					// add Dutch translations to existing uniqueEntry
					uniqueEntry.nl = uniqueEntry.nl.concat(entry.nl);
				}
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
				let onlyMerged = mergeDuplicates(dictEntries);

				// Creates a string from the React Component to inject into Jade template
				// var markup = ReactDOMServer.renderToString(React.createElement(SearchPanel, null));

				res.render('de-nl-searchpage', {
					dictEntries: onlyMerged,
					searchTerm: term,
					markup: 'currently disabled' // REACT EXPERIMENT
				})
			} else {
				res.render('de-nl-notfound', {
					germanStr: term,
					searchTerm: term
				});
			}
		})
    // Pass error on to next()
    .then(null, next);
}

// For tests
exports.mergeDuplicates = mergeDuplicates;

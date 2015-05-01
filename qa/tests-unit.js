var sf = require('../models/subjectFieldModel.js'),
	TermEntry = require('../models/termEntryModel.js'),
	url = require('../lib/url');

var expect = require('chai').expect;

//
// subjectFieldModel
//
suite('Unit testing SubjectFieldModel', function() {
	test('testing getSubjectFieldStrs(416005 416008)', function() {
		expect(sf.getSubjectFieldStrs([416005, 416008]) === ['Organisation of elections', 'Voting method']);
	});
});

//
// url library
//
suite('Unit testing url lib', function() {
	test('encodeSlugArr on an array of slugs', function() {
		var encodedArray = url.encodeSlugArr(['Arbeitsgruppe "Nord/Süd"']);
		expect(encodedArray.termStr === 'Arbeitsgruppe "Nord/Süd"');
		expect(encodedArray.url === 'Arbeitsgruppe_"Nord%47Süd"');
	});

	test('decodeSlug on an encoded slug', function() {
		expect(url.decodeSlug('Arbeitsgruppe_"Nord%47Süd"') === 'Arbeitsgruppe "Nord/Süd"');
	});
});

//
// termEntryModel
//

suite('Unit testing termEntryModel', function() {

	// Creating some test data
	var term = new TermEntry({
		"_id": "5501b5eb6e6254538d5c4757",
		"id": "IATE-1068280",
		"note": "",
		"langSet": [{
			"lang": "de",
			"termStr": "lebensmittelecht",
			"termNote": "fullForm",
			"relCode": 3
		}, {
			"lang": "nl",
			"termStr": "geschikt voor levensmiddelen",
			"termNote": "fullForm",
			"relCode": 3
		}, {
			"lang": "nl",
			"termStr": "nog een vertaling",
			"termNote": "fullForm",
			"relCode": 3
		}],
		"subjectField": [56]
	});

	// and array of TermEntries, with just one entry
	var input = [term];

	test('Testing function separateLanguages', function() {
		var output = [{
			"id": "IATE-1068280",
			"subjectFields": [{
				"termStr": "Landbouw, bosbouw en visserij",
				"termUrl": "Landbouw,_bosbouw_en_visserij"
			}],
			"de": [{
				"lang": "de",
				"termStr": "lebensmittelecht",
				"termNote": "fullForm",
				"relCode": 3
			}],
			"nl": [{
				"lang": "nl",
				"termStr": "geschikt voor levensmiddelen",
				"termNote": "fullForm",
				"relCode": 3
			}, {
				"lang": "nl",
				"termStr": "nog een vertaling",
				"termNote": "fullForm",
				"relCode": 3
			}]
		}];
		expect(output === TermEntry.separateLanguages(input));
	});

	test('Testing function getGermanTranslations', function() {
		var output = ['lebensmittelecht'];
		expect(output === TermEntry.getGermanTranslations(input));
	});

	test('Testing function getDictionaryEntry', function() {

		var output = [{
			"id": "IATE-1068280",
			"subjectFields": [{
				"termStr": "Landbouw, bosbouw en visserij",
				"termUrl": "Landbouw,_bosbouw_en_visserij"
			}],
			"termStrArr": ["geschikt voor levensmiddelen", "nog een vertaling"]
		}];

		// myOutput = TermEntry.getDictionaryEntries(input);
		// console.log(JSON.stringify(myOutput, null, 4));
		expect(output === TermEntry.getDictionaryEntries(input));
	});





});

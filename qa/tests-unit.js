var sf = require('../models/subjectFieldModel.js'),
	url = require('../lib/url');

var expect = require('chai').expect;

//
// termEntryModel
//





//
// subjectFieldModel
//
suite('Testing SubjectField number to string conversion', function() {
	test('testing getSubjectFieldStrs(416005 416008)', function() {
		expect(sf.getSubjectFieldStrs("416005, 416008") === 'Organisation of elections, Voting method');
	});
});

//
// url library
//
suite('Testing url conversion', function() {
	test('encodeSlugArr on an array of slugs', function() {
    var encodedArray = url.encodeSlugArr(['Arbeitsgruppe "Nord/Süd"']);
		expect(encodedArray.termStr === 'Arbeitsgruppe "Nord/Süd"');
    expect(encodedArray.url === 'Arbeitsgruppe_"Nord%47Süd"');
	});

	test('decodeSlug on an encoded slug"', function() {
		expect(url.decodeSlug('Arbeitsgruppe_"Nord%47Süd"') === 'Arbeitsgruppe "Nord/Süd"');
	});
});

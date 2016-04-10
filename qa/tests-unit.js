var sf = require('../lib/subjectField');
var	url = require('../lib/url');

var expect = require('chai').expect;

//
// subjectField
//
suite('Unit testing SubjectField', function() {
	test('testing toStrArr(416005 416008)', function() {
		expect(sf.toStrArr([416005, 416008]) === ['Organisation of elections', 'Voting method']);
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

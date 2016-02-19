var search = require('../handlers/search.js');

var expect = require('chai').expect;

//
// filter duplicated
//
suite('Testing filter duplicates function', function () {

	test('Duplicates should be removed', function () {
		var input = [
			{
				"id": "IATE-1",
				"de": "anlage"
			},
			{
				"id": "IATE-2",
				"de": "Anlage"
			},
			{
				"id": "IATE-3",
				"de": "Anlage"
			},
		];
		var expectedOutput = [
			{
				"id": "IATE-1",
				"de": "anlage"
			},
			{
				"id": "IATE-2",
				"de": "Anlage"
			}
		];
		var actualOuput = search.filterDuplicates(input);
		expect(actualOuput).to.eql(expectedOutput);
	});
});

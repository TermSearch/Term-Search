const search = require('../handlers/search.js');

const expect = require('chai').expect;

//
// Unit test for filter duplicated
//
suite('Testing filter duplicates function', () => {

	test('Duplicates should be removed', function () {
		const input = [
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
		const expectedOutput = [
			{
				"id": "IATE-1",
				"de": "anlage"
			},
			{
				"id": "IATE-2",
				"de": "Anlage"
			}
		];
		const actualOuput = search.filterDuplicates(input);
		expect(actualOuput).to.eql(expectedOutput);
	});
});

const search = require('../handlers/search.js');
const expect = require('chai').expect;

//
// Unit test for merge duplicates
//
suite('Testing merge duplicates function', () => {

	test('Duplicates should be merged', () => {
		const input = [
			{
				"id": "IATE-1",
				"de": "anlage",
				"nl": ["installatie"]
			},
			{
				"id": "IATE-2",
				"de": "Anlage",
				"nl": ["bijlage"]
			},
			{
				"id": "IATE-3",
				"de": "Anlage",
				"nl": ["terrein"]
			},
		];
		const expectedOutput = [
			{
				"id": "IATE-1",
				"de": "anlage",
				"nl": ["installatie"]
			},
			{
				"id": "IATE-2",
				"de": "Anlage",
				"nl": ["bijlage", "terrein"]
			}
		];
		const actualOuput = search.mergeDuplicates(input);
		expect(actualOuput).to.eql(expectedOutput);
	});
});

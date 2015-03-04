var sf = require('../modules/SubjectField.js');
var expect = require('chai').expect;

suite('Testings SubjectField number to string conversion', function() {
	test('getSubjectFieldStrs(416005 416008) should return "Organisation of elections, Voting method"', function() {
		expect(sf.getSubjectFieldStrs("416005, 416008") === 'Organisation of elections, Voting method');
	});
});

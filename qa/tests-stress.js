var loadtest = require('loadtest');
var expect = require('chai').expect;
suite('Stress tests', function() {
	test('Homepage should handle 100 requests in a second', function(done) {
		var options = {
			// url
      // url: 'http://localhost:3000/duits-nederlands/Ueberbrueckungsbeihilfe',
      // live site
      // url: 'http://terms.vangilst.eu/duits-nederlands/Ueberbrueckungsbeihilfe',
			// google search query
      // url: 'https://www.google.nl/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=test%20search',
      url: 'http://localhost:3000/',
      concurrency: 4,
			maxRequests: 100
		};
		loadtest.loadTest(options, function(err, result) {
			expect(!err);
			expect(result.totalTimeSeconds < 1);
			done();
		});
	});
});

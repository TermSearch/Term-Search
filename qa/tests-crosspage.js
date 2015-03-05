var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page testing', function() {
	setup(function() {
		browser = new Browser();
	});

	test('requesting localhost:3000/',
		function(done) {
			var link = 'http://localhost:3000/';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});


	test('requesting duits-nederlands/vakgebied/',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/vakgebied/';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});

	test('requesting duits-nederlands/lebensmittelecht',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/lebensmittelecht';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});

	test('requesting /duits-nederlands/',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});


	test('requesting duits-nederlands/vakgebied/Common_commercial_policy',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/vakgebied/Common_commercial_policy';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});

	test('api: requesting http://localhost:3000/api?termstr=koen',
		function(done) {
			var link = 'http://localhost:3000/api?termstr=koen';
			browser.visit(link, function() {
				browser.assert.status(200);
				done();
			});
		});

});

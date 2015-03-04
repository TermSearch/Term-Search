var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function() {
	setup(function() {
		browser = new Browser();
	});

	test('requesting the page localhost:3000/',
		function(done) {
			var link = 'http://localhost:3000/';
			browser.visit(link, function() {
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});


	test('requesting the page duits-nederlands/vakgebied/',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/vakgebied/';
			browser.visit(link, function() {
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});

	test('requesting the page duits-nederlands/lebensmittelecht',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/lebensmittelecht';
			browser.visit(link, function() {
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});

	test('requesting the page /duits-nederlands/',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/';
			browser.visit(link, function() {
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});


	test('requesting the page duits-nederlands/vakgebied/Common_commercial_policy',
		function(done) {
			var link = 'http://localhost:3000/duits-nederlands/vakgebied/Common_commercial_policy';
			browser.visit(link, function() {
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});

});

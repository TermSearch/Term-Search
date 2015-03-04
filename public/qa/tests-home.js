suite('"duits-nederlands" Page Tests', function() {
	test('page should contain link to duits-nederlands page', function() {
		assert($('a[href="/duits-nederlands/"]').length);
	});
});

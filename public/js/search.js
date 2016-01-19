angular.module('searchApp', ['ngRoute'])

.directive('focusOn', function ($timeout) {

	function moveCursorToEnd(el) {
		// Creates a selection of zero characters at the end of the value
		// This will result in moving cursor to the end of the value
		if (el.value) {
			el.selectionStart = el.selectionEnd = el.value.length;
		}
	}

	return {
		restrict: 'A',
		link: function (_scope, _element, _attr) {
			_scope.$watch(_attr.focusOn, function (_focusVal) {
				$timeout(function () {
					// if the _focusVal is switched to true
					if (_focusVal) {
						// focus element
						_element[0].focus();
						// Necessary hack for browsers Firefox & Explorer
						// Default behavior in Safari & Chrome
						moveCursorToEnd(_element[0]);
					}
				});
			});
		}
	};
})

.filter('highlight', function ($sce) {
	return function (text, phrase) {
		if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
			'<span class="highlighted">$1</span>');
		return $sce.trustAsHtml(text);
	};
})

.controller('SearchController', function ($http, $scope, $window) {
	var searchResults = this;
	searchResults.dictEntries = [];

	$scope.go = function (path) {
		$window.location.href = path;
	};

	searchResults.doSearch = function () {
		// hide landingpage with centered search field
		if ($scope.keyword) $scope.showLandingPage = false;

		$http.get('/api?termStr=' + $scope.keyword)
			.then(function (res) {
					if (res.data.length > 0) $scope.go('/duits-nederlands/'+$scope.keyword);
					searchResults.dictEntries = res.data;
				});
	};
});

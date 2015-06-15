angular.module('searchApp', [])

.directive('focusOn', function($timeout) {
	return {
		restrict: 'A',
		link: function(_scope, _element, _attr) {
			_scope.$watch(_attr.focusOn, function(_focusVal) {
				$timeout(function() {
					if (_focusVal) {
						_element[0].focus();
						// Creates a selection of zero characters at the end of the value
						// This will result in moving cursor to the end of the value
						// Necessary hack for browsers Firefox & Explorer
						// Default behavior in Safari & Chrome
						if(_element[0].value) {
							_element[0].selectionStart = _element[0].selectionEnd = _element[0].value.length;
						}
					}
				});
			});
		}
	};
})

.controller('SearchController', function($http, $scope) {
	var searchResults = this;
	searchResults.terms = [];
	searchResults.doSearch = function() {
		if ($scope.keyword) {
			$scope.showLandingPage = false; // hide landingpage with centered search field
			var searchString = '\"' + $scope.keyword + '\"';
			$http.get('/api?termstr=' + searchString).then(function(res) {
				searchResults.terms = res.data;
			});
		}
	};
});

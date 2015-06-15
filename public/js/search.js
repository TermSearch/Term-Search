angular.module('searchApp', [])

.directive('focusOn', function($timeout) {

	function moveCursorToEnd(el) {
		// Creates a selection of zero characters at the end of the value
		// This will result in moving cursor to the end of the value
		// Necessary hack for browsers Firefox & Explorer
		// Default behavior in Safari & Chrome
		if (el.value) {
			el.selectionStart = el.selectionEnd = el.value.length;
		}
	}

	return {
		restrict: 'A',
		link: function(_scope, _element, _attr) {
			_scope.$watch(_attr.focusOn, function(_focusVal) {
				$timeout(function() {
					// if the _focusVal is switched to true
					if (_focusVal) {
						// focus element
						_element[0].focus();
						// movue cursor to end of input (for Firefox & Explorer)
						moveCursorToEnd(_element[0]);
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

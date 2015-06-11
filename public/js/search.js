angular.module('searchApp', [])

.directive('autoFocus', function($timeout) {
	return {
		restrict: 'AC',
		link: function(_scope, _element) {
			$timeout(function() {
				_element[0].focus();
			}, 0);
		}
	};
})

.directive('focusOn', function($timeout) {
	return {
		restrict: 'A',
		link: function(_scope, _element, _attr) {
			_scope.$watch(_attr.focusOn, function(_focusVal) {
				$timeout(function() {
					if (_focusVal) _element[0].focus();
						else _element[0].blur();
				}, 0);
			});
		}
	};
})

.controller('SearchController', function($http, $scope) {

	var searchResults = this;
	var hideDefaultText = false;

	// default values, example JSON from API
	searchResults.terms = [{
		"id": "IATE-1162091",
		"subjectField": [10],
		"langSet": [{
			"lang": "de",
			"termStr": "Kontrolle dem Umweltsicherheit der Produkte",
			"termNote": "fullForm",
			"relCode": 3
		}, {
			"lang": "nl",
			"termStr": "milieucontrole op produkten",
			"termNote": "fullForm",
			"relCode": 3
		}]
	}, {
		"id": "IATE-46475",
		"subjectField": [52],
		"langSet": [{
			"lang": "de",
			"termStr": "Umweltsicherheit",
			"termNote": "fullForm",
			"relCode": 3
		}, {
			"lang": "nl",
			"termStr": "milieuveiligheid",
			"termNote": "fullForm",
			"relCode": 3
		}]
	}];

	searchResults.doSearch = function() {
		$scope.showLandingPage = false;
		var searchString = '\"' + $scope.keyword + '\"';
		$http.get('/api?termstr=' + searchString).then(function(res) {
			searchResults.terms = res.data;
		});
	};

});

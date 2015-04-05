angular.module('searchApp', [])
	.controller('SearchController', function($http, $scope) {

		var searchResults = this;
		var hideDefaultText = false;
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
			var searchString = '\"' + $scope.keyword + '\"';
			$http.get('/api?termstr='+searchString).then(function(res) {
				searchResults.terms = res.data;
			});
		};

	});

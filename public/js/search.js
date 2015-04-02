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
			$http.get('/api?termstr='+$scope.keyword).then(function(res) {
				// console.log(res.data);
				// console.log($scope.keyword);
				searchResults.terms = res.data;
			});
		};

	});

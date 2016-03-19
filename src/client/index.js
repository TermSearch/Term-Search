const React = require('react');
const ReactDOM = require('react-dom');
import SearchResultsPane from './Components/SearchResultsPane.jsx';

var renderFullText = function (json) {
  ReactDOM.render(
    <SearchResultsPane data={json.results.results} />,
    document.getElementById('fulltext')
  );
	console.timeEnd("Query time");
}

var fulltextSearch = function (query) {
	//- event.preventDefault();
	// var query = document.getElementById('query').value;
	console.time("Query time");
  if (query) fetch('http://localhost:2020/api/translations/textsearch?searchPhrase=' + query + '&limit=50&skip=0', {
			method: 'get'
		})
		.then(function (res) {
			return res.json();
		})
		.then(renderFullText)
		.catch(function (err) {
			console.log(err);
		})
		//- window.history.pushState("", "", '/search?term='+query);
}

// Export function to window object for global access
window.fulltextSearch = fulltextSearch;

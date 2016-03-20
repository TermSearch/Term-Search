import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultsPane from './Components/SearchResultsPane.jsx';
import SearchResults from './Components/SearchResults.jsx';

var renderFullText = function (json) {
	ReactDOM.render(
    <SearchResultsPane label="Er zijn x voorbeelden van vertalingen gevonden">
		    <SearchResults data={json.results.results} />
    </SearchResultsPane>,
		document.getElementById('sentences')
	);
}

var fulltextSearch = function (query) {
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
}

const renderTerms = function (json) {
  console.log(JSON.stringify(json, null, 4));
  ReactDOM.render(
    <SearchResultsPane label={"Er zijn "+json.length+" vertalingen gevonden"}>
      <ul>
        { json.map( function(term) { return ( <li><i>{term.subjectFields}</i></li>)})}
      </ul>
      <ul>
        { json.map( function(term) { return ( <li><b>{term.de}</b>: {term.nl.join(' | ')} </li> )} ) }
      </ul>
    </SearchResultsPane>,
		document.getElementById('terms')
	);
}

const termSearch = function (query) {
    const subjectFields = 436001; // inq for in array search currently not working
  	const pattern = '^'+query;
		if (query) fetch('http://localhost:2020/api/dictentries?filter[where][de][like]='+query+'&filter[where][subjectFields]='+subjectFields+'&filter[limit]=50',
    {
				method: 'get'
			})
			.then(function (res) {
				return res.json();
			})
	.then(renderTerms)
	.catch(function (err) {
		console.log(err);
	})
}


var searchOnSubmit = function () {
	event.preventDefault();
	var query = document.getElementById('query').value;
	termSearch(query);
	fulltextSearch(query);
	window.history.pushState("", "", '/search?term=' + query);
}

var searchOnDocumentLoad = function (query) {
  termSearch(query);
  fulltextSearch(query);
}

// Export function to window object for global access
window.searchOnSubmit = searchOnSubmit;
window.searchOnDocumentLoad = searchOnDocumentLoad;

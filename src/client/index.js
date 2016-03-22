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
		.then(res => res.json())
		.then(renderFullText)
		.catch(err => {
			console.log(err);
		})
}

const renderTerms = function (dictentries) {

  console.log(JSON.stringify(dictentries, null, 4));
  if (dictentries.length > 0) ReactDOM.render(
    <SearchResultsPane label={"Er zijn "+dictentries.length+" vertalingen gevonden"}>
      <ul>
        { dictentries.map( function(term) { return ( <li><b>{term.de}</b>: {term.nl.join(' | ')} </li> )} ) }
      </ul>
    </SearchResultsPane>,
		document.getElementById('terms')
	);
}

const termSearch = function (query) {
	const subjectFields = 436001; // inq for in array search currently not working
	if (query)
		fetch('http://localhost:2020/api/dictentries/startsWith?term=' + query + '&limit=10&skip=0&subjectFieldStr=Recht', {
			method: 'get'
		})
		.then(res => res.json())
		.then(json => json.results.dictentries)
		.then(renderTerms)
		.catch(err => {
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

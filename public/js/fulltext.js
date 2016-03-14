ReactDOM.render(
	React.DOM.h1(null, 'Hello world!'),
	document.getElementById('fulltext')
);

var addContent = function (content) {
	var p = document.createElement('p');
	var newContent = document.createTextNode(content);
	p.appendChild(newContent);
	results.appendChild(p);
}

var render = function (json) {
	console.log(json);
	var results = document.getElementById('static-results');
	json.results.results.map(function (e, i, arr) {
		addContent('Duits: ' + e['DE-DE']);
		addContent('Nederlands: ' + e['NL-NL']);
	});
	console.timeEnd("Query");
}

var doSearch = function () {
	//- event.preventDefault();
	var query = document.getElementById('query').value;
	console.time("Query");
	fetch('http://localhost:2020/api/translations/textsearch?searchPhrase=' + query + '&limit=10&skip=0', {
			method: 'get'
		})
		.then(function (res) {
			return res.json();
		})
		.then(render)
		.catch(function (err) {
			console.log(err);
		})
		//- window.history.pushState("", "", '/search?term='+query);
}

doSearch();

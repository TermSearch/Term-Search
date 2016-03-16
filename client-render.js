const React = require('react');
const ReactDOM = require('react-dom');

// var SearchPanel = React.createClass({displayName: 'SearchPanel',
//   render: function() {
//     return (
//       React.createElement('div', {className: "SearchPanel"},
//         "This is the search panel"
//       )
//     );
//   }
// });
//
// ReactDOM.render( <SearchPanel />, document.getElementById('fulltext') )

var TranslationPair = React.createClass({
  render:function() {
    return (
      <tr>
        <td>{this.props.translationData['DE-DE']}</td>
        <td>{this.props.translationData['NL-NL']}</td>
      </tr>
    );
  }
})

var SearchResults = React.createClass({
  render: function() {
    var translationNodes = this.props.data.map( function (translationData) {
      return (
        <TranslationPair translationData={translationData} />
      );
    });
    return (
        <table className="table table-condensed searchResults">
          <thead>
            <tr>
              <th>Duits</th>
              <th>Nederlands</th>
            </tr>
          </thead>
          <tbody>
            {translationNodes}
          </tbody>
        </table>
    );
  }
});

var SearchResultsPane = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title search-panel-titel">
            <span className="glyphicon glyphicon-stop"/>
              Full text search results
          </div>
        </div>
        <div className="panel-body">
          <SearchResults data={this.props.data} />
        </div>
      </div>
    );
  }
})

var render = function (json) {
  ReactDOM.render(
    <SearchResultsPane data={json.results.results} />,
    document.getElementById('fulltext')
  );
	console.timeEnd("Query time");
}

var doSearch = function () {
	//- event.preventDefault();
	var query = document.getElementById('query').value;
	console.time("Query time");
  if (query) fetch('http://localhost:2020/api/translations/textsearch?searchPhrase=' + query + '&limit=50&skip=0', {
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

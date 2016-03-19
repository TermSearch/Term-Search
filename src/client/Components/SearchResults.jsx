import React from 'react';
import TranslationPair from './TranslationPair.jsx';

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

export default SearchResults;

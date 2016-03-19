import React from 'react';
import SearchResults from './SearchResults.jsx';

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

export default SearchResultsPane;

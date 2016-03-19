import React from 'react';

var SearchResultsPane = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title search-panel-titel">
            <span className="glyphicon glyphicon-stop"/>
              &nbsp; {this.props.label}
          </div>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
})

export default SearchResultsPane;

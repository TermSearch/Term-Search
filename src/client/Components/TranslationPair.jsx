import React from 'react';

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

export default TranslationPair;

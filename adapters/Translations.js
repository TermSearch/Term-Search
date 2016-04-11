require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports.textSearch = function () {
  return fetch('http://0.0.0.0:2020/translations/textSearch?searchPhrase=Anklsgkjhfghlage&limit=10&skip=10')
      .then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      });
}

module.exports.findDocNo = function (docNo) {
  // Not implemented yet
}

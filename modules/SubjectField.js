var domainCodes = require('../../data/IATE-domain-codes.json');

// Public methods
module.exports.getSubjectFieldStr = getSubjectFieldStr;
module.exports.getAll = getAll;
module.exports.getSubjectFieldNr = getSubjectFieldNr;
module.exports.getSubjectFieldStrs = getSubjectFieldStrs;

// Returns an array of all subject field strings
function getAll () {
  var descrArr = [];
  domainCodes.forEach ( function (domein) {
    descrArr.push(domein["Domain Description"]);
  });
  return descrArr;
}

// Converts 123 to "Employments Policy"
function getSubjectFieldStr ( subjectFieldNr ) {
  var subjectFieldStr = "";
  domainCodes.forEach ( function ( domein ) {
    if ( parseInt( domein["Domain ID"], 10 ) === subjectFieldNr ) {
      subjectFieldStr = domein["Domain Description"];
    }
  });
  return subjectFieldStr;
}

// Converts "Employments Policy" to 123
function getSubjectFieldNr ( subjectFieldStr ) {
  var subjectFieldNr;
  domainCodes.forEach ( function ( domein ) {
    if ( domein["Domain Description"] === subjectFieldStr ) {
      subjectFieldNr = domein["Domain ID"];
    }
  });
  return subjectFieldNr;
}

// Converts 123 345 to "Employment Policy, Education"
function getSubjectFieldStrs ( subjectFieldNrs ) {
  var strArr = [];
  var nrsArr = stringOfNumToArr ( subjectFieldNrs );
  nrsArr.forEach ( function ( nr ) {
    strArr.push( getSubjectFieldStr( nr ) );
  });
  return strArr.join(', '); // returns a comma seperated string
}

// Private functions

// Converts 123, 345 to [123, 345]
function stringOfNumToArr ( subjectFieldNrs ) {
  var arr = subjectFieldNrs.split(", ");
  arr.forEach ( function ( num, index, array ) {
    arr[index] = +arr[index];
  });
  return arr;
}

var domainCodes = require('../../json/domaincodes.json');

// Public methods
module.exports.getSubjectFieldStr = getSubjectFieldStr;
module.exports.getAll = getAll;
module.exports.getSubjectFieldNr = getSubjectFieldNr;
module.exports.getSubjectFieldStrs = getSubjectFieldStrs;

// Returns an array of all subject field strings
function getAll() {

  var descrArr = domainCodes.map( function(domaincode) {
    return domaincode.nl || domaincode.en;
  });

  // Helper function to filter out only unique strings
	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}
  var uniqueDescrArr = descrArr.filter( onlyUnique );

	return uniqueDescrArr;
}

// Converts 123 to "Employments Policy"
function getSubjectFieldStr(subjectFieldNr) {
	var subjectFieldStr = "";
	domainCodes.forEach(function(obj) {
		if (parseInt(obj.code, 10) === subjectFieldNr) {
			subjectFieldStr = obj.nl || obj.en;
		}
	});
	return subjectFieldStr;
}

// Converts "Employments Policy" to 123
function getSubjectFieldNr(subjectFieldStr) {
	var subjectFieldNr;
	domainCodes.forEach(function(obj) {
		if (obj.nl === subjectFieldStr || obj.en === subjectFieldStr) {
			subjectFieldNr = obj.code;
		}
	});
	return subjectFieldNr;
}

// Converts [416005, 416008] to "Organisation of elections, Voting method"
function getSubjectFieldStrs(nrsArr) {
	var strArr = [];
	nrsArr.forEach(function(nr) {
		strArr.push(getSubjectFieldStr(nr));
	});
	return strArr; // returns an array of strings
}

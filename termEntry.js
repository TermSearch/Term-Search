//
// Schema + methods for termEntry object
//

// Module dependencies
var mongoose = require('mongoose'),
  SubjectField = require('./modules/SubjectField.js'),
  Schemas = require('./modules/Schemas');

// Schema
var termEntrySchema = Schemas.termEntrySchema;

// Methods

// Returns an array of terms for the specified language
termEntrySchema.methods.getTranslations = function(language) {
  return this.langSet.filter( function( term ) {
    return term.lang === language;
  });
};

termEntrySchema.methods.hasTranslation = function(language) {
  // Has at least one translation for language, then return true
  return this.getTranslations(language).length > 0;
};

termEntrySchema.methods.retrieveSubjectFieldStr = function(language) {
  this.subjectFieldStr = SubjectField.getSubjectFieldStrs(this.subjectField);
};

// Statics

// Find termStr in certain language
// If found, it returns a callback with
// an array of termEntries containing this termStr
termEntrySchema.statics.findByStr = function(termStr, callback) {
  this.find({
      'langSet': {
        $elemMatch: {
          lang: 'de',
          termStr: termStr
        }
      }
    },
    function(err, termEntries) {
      termEntries = filterTerms(termEntries, 'nl');
      termEntries = retrieveSubjectFieldStrs(termEntries, 'nl');
      callback(err, termEntries);
    });
};

// Finds and returns (by callback) an array of the first 1000
// German strings for the specified subjectFieldNr (number)
termEntrySchema.statics.findBySubjectField = function(subjectFieldNr, callback) {
  this.find({
      subjectField: {
        $regex: new RegExp(subjectFieldNr)
      }
    })
    .limit(1000)
    .exec(function(err, termEntries) {
      termEntries = filterTerms(termEntries, 'nl');
      termEntries = retrieveSubjectFieldStrs(termEntries, 'nl');
      var termArray = filterOneLang ( termEntries, 'de' );
      callback(err, termArray);
    });
};

// Finds and returns (by callback) the first 1000
// German strings in de database as an array
termEntrySchema.statics.find1K = function(callback) {
  this.find()
    .limit(1000)
    .exec(function(err, termEntries) {
      termEntries = filterTerms(termEntries, 'nl');
      termEntries = retrieveSubjectFieldStrs(termEntries, 'nl');
      var termArray = filterOneLang ( termEntries, 'de' );
      callback(err, termArray);
    });
};

// Private functions

// Returns an array of termEntries with at least one [language] entry
// E.g: use: filterTerms(termEntries, 'nl')
// to filter out all termEntries without Dutch translations in them
function filterTerms(termEntries, language) {
  return termEntries.filter(function(termEntry) {
    return termEntry.hasTranslation(language);
  });
}

function filterOneLang( termEntries, language) {
  var retArr = [];
  termEntries.forEach ( function ( termEntry ) {
    retArr = retArr.concat ( termEntry.getTranslations ( language ) );
  });
  return retArr;
}

function retrieveSubjectFieldStrs(termEntries, language) {
  termEntries.forEach(function( termEntry ) {
    termEntry.retrieveSubjectFieldStr(language);
  });
  return termEntries;
}

module.exports = mongoose.model('TermEntry', termEntrySchema);

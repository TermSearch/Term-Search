var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var termEntrySchema = new Schema({
  id: String, // IATE....
  subjectField: { type: String, index: true }, // 2841003, 00
  subjectFieldStr: String, // Aviation
  note: String, // e.g. pharmaceutical product
  langSet: [{
    lang: { type: String, index: true }, // "nl"
    termStr: { type: String, index: true }, // "vrijstelling"
    termNote: String,
    relCode: Number
  }]
});

termEntrySchema.set('autoIndex', false);

module.exports.termEntrySchema = termEntrySchema;

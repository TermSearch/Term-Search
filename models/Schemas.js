var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var termEntrySchema = new Schema({
    id: String, // eg. IATE....
    subjectField: {
        type: String,
        index: true
    }, // e.g. 2841003, 00
    note: String, // e.g. pharmaceutical product
    langSet: [{
        lang: {
            type: String,
            index: true
        }, // e.g. "nl"
        termStr: {
            type: String,
            index: true,
            text: true
        }, // e.g. "vrijstelling"
        termNote: String,
        relCode: Number
    }]
});

module.exports.termEntrySchema = termEntrySchema;

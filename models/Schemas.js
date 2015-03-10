var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var termEntrySchema = new Schema({
	id: String, // eg. IATE....
	subjectField: {
		type: [Number],
		index: true
	}, // e.g. [123, 345]
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
var mongoose = require('mongoose');
var	Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var termEntrySchema = new Schema({
	id: {
		type: String, // eg. IATE....
		index: true
	},
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
			index: true
		}, // e.g. "vrijstelling"
		termNote: String, // eg. fullForm,
		relCode: Number
	}]
});

termEntrySchema.index({
	'langSet.termStr': 'text'
}, {
	default_language: 'german'
});

termEntrySchema.plugin(mongoosePaginate);

module.exports.termEntrySchema = termEntrySchema;

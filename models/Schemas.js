var mongoose = require('mongoose');
var	Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var dictEntrySchema = new Schema({
	id: {
		type: String, // eg. IATE....
		index: true
	},
	subjectFields: {
		type: [Number],
		index: true
	}, // e.g. [123, 345]
	note: String, // e.g. pharmaceutical product
	de: {
		type: String,
		index: true
	},
	nl: {
		type: [String]
	}
});

dictEntrySchema.plugin(mongoosePaginate);

module.exports.dictEntrySchema = dictEntrySchema;

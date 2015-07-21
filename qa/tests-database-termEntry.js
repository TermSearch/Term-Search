var TermEntry = require('../models/termEntryModel.js');
var mongoose = require('mongoose');
var config = require('../config/config.json');
var assert = require('chai').assert;

mongoose.connect(config.db.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error MongoDB:'));
db.once('open', function (callback) {

	//
	// termEntryModel
	//

	suite('Database termEntryModel:', function () {
		test('find first 500 mongodb term entries', function (done) {
			TermEntry.find()
				.limit(500)
				.exec()
				.then(function (termEntries) {
					assert(termEntries.length > 0, 'no termentries found!');
					done();
				})
				.then(null, function (err) {
					assert(!err, 'database error ' + err);
					done();
				});
		});

		test('find 50 entries for subjectfield 44', function (done) {
			TermEntry.find({
					subjectField: {
						$all: [44]
					}
				})
				.limit(50)
				.exec()
				.then(function (termEntries) {
					assert(termEntries.length > 0, 'no termentries found!');
					done();
				})
				.then(null, function (err) {
					assert(!err, 'database error ' + err);
					done();
				});
		});

		test('find 4000th page of 100 mongodb term entries', function (done) {
			TermEntry.paginate({}, {
				page: 4000,
				limit: 100
			}, function (error, termEntries, pageCount, itemCount) {
				if (error) {
					assert(!err, 'database error ' + err);
					done();
				} else {
					assert(termEntries.length === 100, 'no termentries found!');
					done();
				}
			});
		});
	});

});

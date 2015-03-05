var TermEntry = require('../models/termEntryModel.js');
var mongoose = require('mongoose');

var expect = require('chai').expect;

mongoose.connect('mongodb://localhost/termworld');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error MongoDB:'));
db.once('open', function(callback) {

	//
	// termEntryModel
	//

	suite('Database testing', function() {

		test('find first 500 mongodb entries', function(done) {

			TermEntry.find()
				.limit(500)
				.exec()
				.then(function(termEntries) {
					expect(termEntries.length > 0);
					done();
				})
				.then(null, function(err) {
					expect(!err);
					done();
				});

		});

		test('find 50 entries for subjectfield 44', function(done) {

			TermEntry.find({
					subjectField: {
						$all: [44]
					}
				})
				.limit(50)
				.exec()
				.then(function(termEntries) {
					expect(termEntries.length > 0);
					done();
				})
				.then(null, function(err) {
					expect(!err);
					done();
				});

		});

	});

});

var TermEntry = require('../models/termEntryModel.js');
// var DomainCode = require('../models/domainCodeModel.js');
var mongoose = require('mongoose');

var assert = require('chai').assert;

mongoose.connect('mongodb://localhost/termworld-2015');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error MongoDB:'));
db.once('open', function(callback) {

	//
	// termEntryModel
	//

	suite('Database termEntryModel', function() {

		test('find first 500 mongodb term entries', function(done) {

			TermEntry.find()
				.limit(500)
				.exec()
				.then(function(termEntries) {
					assert(termEntries.length > 0, 'no termentries found!');
					done();
				})
				.then(null, function(err) {
					assert(!err, 'database error ' + err);
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
					assert(termEntries.length > 0, 'no termentries found!');
					done();
				})
				.then(null, function(err) {
					assert(!err, 'database error ' + err);
					done();
				});

		});

	});


	//
	// domainCodeModel
	//

	// suite('Database domainCodeModel', function() {
	//
	// 	test('save test domaincode', function(done) {
	// 		var testDomain = new DomainCode({
	// 			id: -1,
	// 			nl: 'test'
	// 		});
	// 		testDomain.save(function(err) {
	// 			assert(!err, 'an error has occured: ' + err);
	// 			done();
	// 		});
	// 	});
	//
	// 	test('find example domainCode', function(done) {
	// 		DomainCode.find({
	// 				id: -1
	// 			})
	// 			.exec()
	// 			.then(function(domainCodes) {
	// 				assert(domainCodes[0].nl === 'test', 'name not equal to test');
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				assert(!err, 'database error ' + err);
	// 				done();
	// 			});
	//
	// 	});
	//
	// 	test('remove example domaincode', function(done) {
	// 		DomainCode.remove({
	// 				id: -1,
	// 				nl: 'test'
	// 			})
	// 			.exec()
	// 			.then(function() {
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				assert(!err, 'error ' + err);
	// 				done();
	// 			});
	// 	});
	//
	// 	//
	// 	// create mutiple documents
	// 	//
	//
	// 	test('saving mutiple domaincodes', function(done) {
	// 		var testDomain = new DomainCode({
	// 			id: -1,
	// 			nl: 'test'
	// 		});
	// 		var testDomain2 = new DomainCode({
	// 			id: -2,
	// 			nl: 'test'
	// 		});
	// 		var arr = [testDomain, testDomain2];
	//
	// 		DomainCode.create(arr, function(err) {
	// 			assert(!err, 'an error has occured: ' + err);
	// 			done();
	// 		});
	// 	});
	//
	// 	test('finding example domainCode', function(done) {
	// 		DomainCode.find({
	// 				nl: 'test'
	// 			})
	// 			.exec()
	// 			.then(function(domainCodes) {
	// 				assert(domainCodes[0].nl === 'test', 'name not equal to test2');
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				assert(!err, 'database error ' + err);
	// 				done();
	// 			});
	//
	// 	});
	//
	// 	test('removing example domaincode 1', function(done) {
	// 		DomainCode.remove({
	// 				id: -1,
	// 				nl: 'test'
	// 			})
	// 			.exec()
	// 			.then(function() {
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				assert(!err, 'error ' + err);
	// 				done();
	// 			});
	// 	});
	//
	//
	// 	test('removing example domaincode 2', function(done) {
	// 		DomainCode.remove({
	// 				id: -2,
	// 				nl: 'test'
	// 			})
	// 			.exec()
	// 			.then(function() {
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				assert(!err, 'error ' + err);
	// 				done();
	// 			});
	// 	});
	//
	// 	// test('remove all domain codes', function(done) {
	// 	// 	DomainCode.remove()
	// 	// 		.exec()
	// 	// 		.then(function() {
	// 	// 			done();
	// 	// 		})
	// 	// 		.then(null, function(err) {
	// 	// 			assert(!err, 'error ' + err);
	// 	// 			done();
	// 	// 		});
	// 	// });
	//
	// 	test('find some domaincodes and convert them', function(done) {
	// 		DomainCode.findOne({
	// 				id: 0
	// 			})
	// 			.exec()
	// 			.then(function(doc) {
	// 				console.log(doc instanceof DomainCode);
	// 				console.log(doc.getTranslation('nl'));
	// 				done();
	// 			})
	// 			.then(null, function(err) {
	// 				console.log(err);
	// 				done();
	// 			});
	//
	// 	});
	//
	//
	// });

});

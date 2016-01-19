var DictEntry = require('../models/dictEntryModel.js');
var mongoose = require('mongoose');
var config = require('../config/config.json');
var expect = require('chai').expect;

suite('Database tests dictEntryModel:', function () {

	// before all tests: check database connection
	beforeEach(function (done) {
		if (mongoose.connection.db) return done();
		mongoose.connect(config.db.url, done);
	});

	describe('Finding Dutch translation for Anlage', function () {
		it('should return an array, first element ID a string, equal to IATE-778835', function (done) {
			DictEntry.findTranslation('Anlage')
				.then(function (dictEntries) {
					expect(dictEntries).to.be.a('array');
					expect(dictEntries[0].id).to.be.a('string').to.equal('IATE-778835');
					done();
				});
		});
	});

	describe('Finding Dutch translation for Sladibratfast', function () {
		it('should return false', function (done) {
			DictEntry.findTranslation('Sladibratfast')
				.then(function (dictEntries) {
					expect(dictEntries).to.be.a('boolean').to.equal(false);
					done();
				});
		});
	});

	describe('find 4000th page of 100 mongodb term entries', function () {
		it('should return 100 dictEntries', function (done) {
			DictEntry.paginate({}, {
				page: 4000,
				limit: 100
			}, function (error, dictEntries, pageCount, itemCount) {
				// console.log(dictEntries);
				expect(dictEntries).to.be.a('object');
				done();
			});
		});
	});

	// run this at the end of all tests
	after(function (done) {
		mongoose.disconnect();
		return done();
	});

});

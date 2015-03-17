var unzip = require('unzip');
var JSONStream = require('JSONStream');
var fs = require('fs');
var path = require('path');
var inputZipFile = process.argv[2];
var mongoCollection = process.argv[3];

// Usage:
//
// node index.js ../../json/IATE-nl.json.zip termentries
// node index.js ../../json/subdomain-codes-nl.json domaincodes
//


// init stream

var SaveToMongo = require('save-to-mongo');

var saveToMongo = SaveToMongo({
  uri: 'mongodb://127.0.0.1:27017/termworld-2015-v3',
  collection: mongoCollection,
  bulk: {
    mode: 'unordered'
  }
});

fs.createReadStream('../../json/IATE-NL.json.zip')
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    var fileName = entry.path;
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (fileName === "IATE-NL.json") {
      entry
      .pipe(JSONStream.parse('*'))
      .pipe(saveToMongo)
      .on('execute-error', function(err) {
        console.log(err);
      })
      .on('done', function() {
        console.log('All done!');
        process.exit(0);
      });
    } else {
      entry.autodrain();
    }
  });

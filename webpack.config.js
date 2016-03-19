var path = require('path');
module.exports = {
  entry: path.join(process.cwd(), 'src/client/index.js'),
  output: {
    path: './public/js/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /.js|jsx$/,
        loader: 'babel'
      }
    ]
  }
}

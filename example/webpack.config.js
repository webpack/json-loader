var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        /*
         When installed 'json-loader' then below line change into loader: 'json-loader'
         */
        loader: '../index.js'
      }
    ]
  }
}

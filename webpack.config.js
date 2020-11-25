/*jshint esversion: 6 */

const path = require('path');

module.exports = {
  entry: {
    sha256: './src/sha256.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  node: {
    __dirname: true
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'js-loader'
    }]
  },
  mode: 'production'
}

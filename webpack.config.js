const path = require('path');

module.exports = {
  entry: {
    index: ['./src/index']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: 'public'
  }
};

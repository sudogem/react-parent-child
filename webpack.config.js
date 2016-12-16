var path = require('path');
var webpack = require('webpack');

// module.exports = {
//   entry: './main.html',
//   // store the generated files at /build/bundle.js
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/build/',
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         include: path.join(__dirname, 'src'),
//         exclude: /(node_modules|bower_components)/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   }
// }


var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, './');
var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;

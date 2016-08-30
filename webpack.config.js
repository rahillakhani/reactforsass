var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const sassLoaders = [
 'css-loader',
 'sass-loader'
]

var config = {
   entry: './main.js',
   output: {
      path:'./',
      filename: 'index.js'
   },
   devServer: {
      inline: true,
      port: 8110
   },
   resolve: {
      extensions: ['', '.js', '.jsx', '.scss'],
   },
   module: {
      loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      },
      {
         test: /\.scss$/,
         exclude: /node_modules/,
         loader: ExtractTextPlugin.extract("style-loader",sassLoaders.join('!')),
         root: path.resolve('./css/')
      }]
   },
   plugins: [
        new ExtractTextPlugin("./css/style.css", {
            allChunks: true
        })
   ]
}

module.exports = config;
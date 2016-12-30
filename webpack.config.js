var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var CSSExporter = new ExtractTextPlugin('css/main.css', {
           allChunks: true
       })


module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
   devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        //loader: ExtractTextPlugin.extract('css!sass') //production
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"] //injection
      }

    ]
  },
  plugins: [HTMLWebpackPluginConfig, CSSExporter]

};

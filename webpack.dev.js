const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common =require('./webpack.config')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // path to directory where emitting bundles
    filename: '[name].bundle.js', // name of file being emitted
    assetModuleFilename: '[name][ext]' //allows images to keep file names
  },
  devtool: 'source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
},
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new HtmlWebpackPlugin({
        template: "./src/template.html",
        title: 'Dev Mode Title',
        filename: 'index.html',
      })
  ]
});

module.exports = config;

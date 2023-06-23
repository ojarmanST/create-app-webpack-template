const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common =require('./webpack.config')
const { merge } = require('webpack-merge')

const config = merge(common, {
  mode: 'development',
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
      openAnalyzer: true,
    }),
  ]
});

module.exports = config;

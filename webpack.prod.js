const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const common =require('./webpack.config')
const { merge } = require("webpack-merge");


const config = merge(common, {
    mode: 'production',
    //optimization most important in prod mode
    optimization: {
        minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            title: 'Title of App',
            template: "./src/template.html", // must have boilerplate file of this name in src folder for the plugin to reference
            filename: 'index.html',
            minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
            }
        })
        ]
    },
//   output: {
//     path: path.resolve(__dirname, 'dist'), // path to directory where emitting bundles
//     filename: 'bundle.js', // name of file being emitted
//     assetModuleFilename: '[name][ext]' //allows images to keep file names
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1
//             }
//           },
//           'postcss-loader'
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Olivias App',
//       filename: 'index.html',
//       template: './src/template.html'
//     }),
//     new MiniCssExtractPlugin(),
//     new CleanWebpackPlugin() //cleans up build folder
//   ]
});

module.exports = config;

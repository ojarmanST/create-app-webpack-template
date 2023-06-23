const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const common =require('./webpack.config')
const { merge } = require("webpack-merge");

const config = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: '[name][ext]' //allows images to keep file names
      },
    //optimization most important in prod mode
    optimization: {
        minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            title: 'Prod Mode Title',
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
});

module.exports = config;

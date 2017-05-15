var webpack = require('webpack');

/* Below are loading common dependencies used accross dev and prod webpack configs */
var buildPaths = require('./build-paths');
var commonPlugins = require('./common-plugins');
var commonLoaders = require('./common-loaders');

/**
 * Cleans the webpack build directory
 *
 * This is required, because in prod we use file hash codes to cahe our assets into CDN.
 * So whenever we take a new build we make sure that our build directory is cleaned and old build files are deleted
 */
var cleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = buildPaths.BUILD_DIR;
var APP_DIR = buildPaths.APP_DIR;

var cleanBuildParams = {
    root: ROOT_DIR,
    verbose: false,
    dry: false,
    exclude: ['.gitignore']
};

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: '[name]-[hash].js' //Storing files with dynamic hash codes
    },
    module : {
        loaders : commonLoaders
    },
    plugins: [
        new cleanWebpackPlugin([BUILD_DIR], cleanBuildParams)
    ].concat(commonPlugins),
};

module.exports = config;
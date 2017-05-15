var webpack = require('webpack');

/* Below are loading common dependencies used accross dev and prod webpack configs */
var buildPaths = require('./build-paths');
var commonPlugins = require('./common-plugins');
var commonLoaders = require('./common-loaders');

var BUILD_DIR = buildPaths.BUILD_DIR;
var APP_DIR = buildPaths.APP_DIR;

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module : {
        loaders : commonLoaders
    },
    plugins: commonPlugins,
};

module.exports = config;
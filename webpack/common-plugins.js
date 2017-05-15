// loading env
require('dotenv').load();

var webpack = require('webpack');

module.exports = [
	// To seperate out vendor files from our main js code
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    // Setting variables to be used in react component i.e client
    new webpack.DefinePlugin({
    	__TWITTER_SEARCH_DATA_REFRESH_INTERVAL__: process.env.TWITTER_SEARCH_DATA_REFRESH_INTERVAL,
    }),
];
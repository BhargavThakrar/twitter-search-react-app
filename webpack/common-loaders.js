var buildPaths = require('./build-paths');

module.exports = [
    {
        test : /\.jsx?/,
        include : buildPaths.APP_DIR,
        loader : 'babel-loader'
    }
];
const path = require('path');

/* APP Root Directory */
global.APP_ROOT = path.resolve(`${__dirname}/../`);

/* App Running on port */
global.PORT = process.env.PORT || 3000;

/* Developement Enviornment */
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';

console.log(process.env.NODE_ENV);

/* Set app src point to src or build  for using transpiled code
or non transpiled code on the basis of environment */
global.APP_SRC = (__DEVELOPMENT__) ? path.resolve(`${APP_ROOT}/src`) : path.resolve(`${APP_ROOT}/build`);

/* Twitter Settings */
global.TWITTER = {
	CONSUMER_KEY : process.env.TWITTER_CONSUMER_KEY,
	CONSUMER_SECRET : process.env.TWITTER_CONSUMER_SECRET,
	ACCESS_TOKEN_KEY : process.env.TWITTER_ACCESS_TOKEN_KEY,
	ACCESS_TOKEN_SECRET : process.env.TWITTER_ACCESS_TOKEN_SECRET,
	TWITTER_SEARCH_DATA_REFRESH_INTERVAL : process.env.TWITTER_SEARCH_DATA_REFRESH_INTERVAL
};
import express from 'express';
import path from 'path';
import TwitterProvider from '../providers/twitter';

export default (app) => {

    // serve our static stuff like sitemap.xml
    app.use(express.static(path.join(APP_ROOT, 'public/')));

    app.get('/twitter', (req, res, next) => {
    	if(TwitterProvider[req.query.api]) {
    		new TwitterProvider[req.query.api](req, res).call().then(response => {
    			res.json(response);
    		}).catch(error => {
    			res.json(error);
    		});
    	}
    });

    // Handles all routes so you do not get a not found error
	app.get('*', (req, res, next) => {
	    res.sendFile(path.resolve(APP_ROOT, 'public', 'index.html'));
	});
};

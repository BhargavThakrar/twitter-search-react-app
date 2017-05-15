import Base from '../base';
import Promise from 'bluebird';

export default class Search extends Base {
	
	constructor(req, res) {
		super(res, res);
	}

	/**
	 * Function that actually makes an API call
	 * @return Promise
	 */
	call() {
		// Have hard coded the search term cricket over here, but we can easily pass this...
		// Basically we can have the entire params to be injected here in this function
		// getTwitterCLient(), formatSuccessResponse() and formatFailResponse() are from base class
		return  new Promise((resolve, reject) => {
			this.getTwitterCLient().get('search/tweets', {q: 'cricket', 'result_type': 'recent'}, (error, tweets, response) => {
				if (!error) {
					return resolve(this.formatSuccessResponse(tweets));
				}
				
				return reject(this.formatFailResponse(error));
			});	
		});		
	}

}
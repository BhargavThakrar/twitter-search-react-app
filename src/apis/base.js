import Twitter from 'twitter';

/**
 * This class is created so that all the common stuffs related to third party API integration can be dumped here.
 * This will allow faster integration of other APIs. This is a must have base class!!
 */
export default class Base {

	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	/** 
	 * Twitter credentials
	 * @return {object} Twitter client object
	 */
	getTwitterCLient() {
		return new Twitter({
			consumer_key: TWITTER.CONSUMER_KEY,
			consumer_secret: TWITTER.CONSUMER_SECRET,
			access_token_key: TWITTER.ACCESS_TOKEN_KEY,
			access_token_secret: TWITTER.ACCESS_TOKEN_SECRET
		});
	}

	/**
	 * All the response that go to browser must pass thru this function
	 * This will allow consistent status code and message check on front end, which is VERY IMPORTANT
	 * 
	 * @param  {json} data API DATA
	 * @return {json}      Final Response
	 */
	formatSuccessResponse(data) {
		return {
			customCode: 1,
			customStatus: 'success',
			data: data
		}
	}

	/**
	 * All the response that go to browser must pass thru this function
	 * This will allow consistent status code and message check on front end, which is VERY IMPORTANT
	 * 
	 * @param  {json} data API ERROR DATA
	 * @return {json}      Final Response
	 */
	formatFailResponse(data) {
		return {
			customCode: 0,
			customStatus: 'fail',
			data: data
		}
	}

}
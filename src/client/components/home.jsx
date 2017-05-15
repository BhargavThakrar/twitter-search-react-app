import React from 'react';
import Timer from './timer.jsx';
import Cards from '../presentation/cards.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	  		cards: [],
	  		error: false
		};		
	}

	componentDidMount() {
		this.callAPI();
	}

	/**
	 * We can leverage this state of react life cycle to stop re rendering of this component
	 *
	 * We can actually compare API responses by JSON stringifying here and take the decision
	 * whether to re render the component or not!
	 */
	/*shouldComponentUpdate(nextProps, nextState) {
		return true;
	}*/

	callAPI() {
		/**
		 * Have used fetch API here which is natively available in most browsers
		 *
		 * Fetch is better than ajax because:
		 * It does not by default pass cookie and header information, etc, hence making it lighter
		 * It internally uses promises, which are better than traditional callback structures
		 * It has better code readability than traditional ajax
		 *
		 * Ideal way of implementing is this to have a fetch polyfill in place, so that we can have a gracefull degradation here.
		 */
		fetch('/twitter?api=search').then((response) => {
			response.json().then((posts) => {
				if(posts.customCode == 1) {
					this.setState({
						cards: posts.data
					});
				}else {
					this.setState({
						error: true
					});
				}
			});			
		});
	}

	render(){
    	const listNode = null;

    	if(this.state.cards.statuses) {
    		return (
	        	<div>
	                <Timer cb={this.callAPI.bind(this)}/>
	        		<Cards cards = {this.state.cards} />
	            </div>
	        );
    	}else {
    		let text = "Loading data... please be patient."

    		if(this.state.error) {
				text = "Sorry, something went wrong. Please try after some time.";
    		}

	        return (
	        	<div>
	         		{text}
	            </div>
	        );
    	}
    }
}
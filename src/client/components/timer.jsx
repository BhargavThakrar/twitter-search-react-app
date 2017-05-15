import React from 'react';

// This is refresh interval, as to when exactly the next data is to be fetched
// Time is in seconds, check env_dev
let refreshInterval = __TWITTER_SEARCH_DATA_REFRESH_INTERVAL__;

/**
 * This component is used to show a small progress bar starting from 100 and every second it drops down till it reaches 0
 * Just to show when exactly the search data is going to refresh
 */
export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	  		timer: refreshInterval,
	  		progress: 100
		};
	}

	// Start the timer as soon as component mounts
	componentDidMount() {
		this.startTimer();
	}

	// Restart the timer again once new set of data is fetched
	componentWillReceiveProps(nextProps) {
		// Reset the state first
		this.setState({
			timer: refreshInterval,
			progress: 100
		});

		// And then start the timer
		this.startTimer();
	}

	startTimer() {
		let timer = setInterval(() => {
			// Keep on reducing the timer every second
			let current = this.state.timer - 1;

			if(current == 0) {
				// When it reaches zero, notify the parent component to make a new API call
				this.props.cb();

				// Also clear the timer
				clearInterval(timer);
			}

			// On each tick, keep on updating its state, so that progress bar renders every second
			this.setState({
				timer: current,
				progress: Math.floor((current/refreshInterval)*100)
			})
		}, 1000);
	}

	render() {
		let text = `Data will refresh in ${this.state.timer} (s)`;

		if(this.state.timer == 0) {
			text = "Refreshing data... please be patient.";
		}
		return (
			<div>
            	{text}
            	<div className="progress-container">
					<div className="progress">
						<div className="progress-bar" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style={{width:this.state.progress + "%"}}>
							
						</div>
					</div>
				</div>
    		</div>
		);
	}
}
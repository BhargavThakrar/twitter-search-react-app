import React from 'react';

export default class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this._handleCardClick = this._handleCardClick.bind(this);
	}

	_handleCardClick(id) {
		let identifier = `flip_${id}`;

		if(this.state[identifier]) {
			this.setState({
				[identifier]: '',
			});
		}else {
			this.setState({
				[identifier]: 'flipped',
			});
		}
		
	}

	render() {
		
		const listNode = this.props.cards.statuses.map((post) => {
			let flipClass = this.state[`flip_${post.id}`] ? this.state[`flip_${post.id}`] : "";
			return (
				<div className="card-container" key={post.id}>
	            	<div className={"custom-card cursor " + flipClass} onClick={() => this._handleCardClick(post.id)}>
	            		<div className="card-body front">
	            			{post.text}
	            		</div>
	            		<div className="card-body back text-center">
	            			<img className="img-responsive img-circle img-center" src={post.user.profile_image_url} />
	            			<strong>{post.user.name}</strong>
	            			<br/>
	            			<strong>{post.user.location}</strong>
	            		</div>
	            	</div>
            	</div>
            )
        });
		
		return (
			<div>
				{listNode}
			</div>
		);
	}
}
import React from 'react';

export default class App extends React.Component {
    render(){
        return (
        	<div>
                <div className="text-center">
                    <h1>Twitter Search</h1>
                </div>

                <div className="container">
                    {this.props.children}
                </div>                
            </div>
        );
    }
}
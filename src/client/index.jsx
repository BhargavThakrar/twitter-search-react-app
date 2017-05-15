import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/app.jsx';
import Home from './components/home.jsx';

ReactDOM.render(
	<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
);
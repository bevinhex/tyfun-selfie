import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

import './accounts-config.js';
import App from './component/App.jsx';
import LoginPage from './component/LoginPage.jsx';
import Camera from './component/Camera.jsx';

Meteor.startup(()=>{
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Camera}/>
				<Route path="login" component={LoginPage}/>
			</Route>
		</Router>
	),document.getElementById('render-target'));
});

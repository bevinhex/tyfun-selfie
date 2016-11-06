import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

import './accounts-config.js';
import App from './component/App.jsx';
import LoginPage from './component/LoginPage.jsx';
import CameraPage from './component/Camera.jsx';
import EditPage from './component/Edit.jsx';

Meteor.startup(()=>{
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={CameraPage}/>
				<Route path="login" component={LoginPage}/>
				<Route path="camera" component={CameraPage}/>
				<Route path="edit" component={EditPage}/>
			</Route>
		</Router>
	),document.getElementById('render-target'));
});

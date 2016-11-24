import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

import '../accounts-config.js';
import App from './component/App.jsx';
import LoginPage from './component/LoginPage.jsx';
import CameraPage from './component/Camera.jsx';
import EditPage from './component/Edit.jsx';
import PopularMonth from './component/PopularMonth.jsx'

const requireAuth = function(nextState,replace){
	console.log(nextState,replace);
		if(!Meteor.loggingIn() && !Meteor.userId()){
			replace('/login');
		}
};
Meteor.startup(()=>{
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={PopularMonth} onEnter={requireAuth}/>
				<Route path="login" component={LoginPage}/>
				<Route path="camera" component={CameraPage} onEnter={requireAuth}/>
				<Route path="edit" component={EditPage} onEnter={requireAuth}/>
			</Route>
		</Router>
	),document.getElementById('render-target'));
});

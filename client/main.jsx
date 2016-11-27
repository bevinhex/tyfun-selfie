import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

import '../accounts-config.js';
import App from './component/App.jsx';
import LoginPage from './component/LoginPage.jsx';
import CameraPage from './component/Camera.jsx';
import EditPage from './component/Edit.jsx';
import PopularPage from './component/PopularMonth.jsx';
import ZoomView from './component/ZoomView.jsx';

const requireAuth = function(nextState,replace){
		if(!Meteor.loggingIn() && !Meteor.userId()){
			replace('/login');
		}
};
Meteor.startup(()=>{
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={PopularPage} onEnter={requireAuth}/>
				<Route path="login" component={LoginPage}/>
				<Route path="camera" component={CameraPage} onEnter={requireAuth}/>
				<Route path="edit" component={EditPage} onEnter={requireAuth}/>
				<Route path="popular" component={PopularPage} onEnter={requireAuth}/>
				<Route path="zoomview" component={ZoomView} onEnter={requireAuth}/>
			</Route>
		</Router>
	),document.getElementById('render-target'));
});

import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Footer extends Component{
  constructor(){
    super();
  }
  gotoGridPage(){
    browserHistory.push('grid');
  }
  gotoPopularPage(){
    browserHistory.push('popular');
  }
  gotoCameraPage(){
    browserHistory.push('camera');
  }
  gotoFriendsPage(){
    browserHistory.push('friends');
  }
  gotoSettingsPage(){
    browserHistory.push('settings');
  }
	render(){
		return(
      <div className="footer">
        <button type="button" className="btn btn-default" onClick={this.gotoGridPage}>
          <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.gotoPopularPage}>
          <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.gotoCameraPage}>
          <span className="glyphicon glyphicon-camera" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.gotoFriendsPage}>
          <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.gotoSettingsPage}>
          <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </button>
      </div>
		);
	}
}

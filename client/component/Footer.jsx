import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Footer extends Component{
  constructor(){
    super();
  }
	render(){
		return(
      <div className="footer">
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-camera" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </button>
      </div>
		);
	}
}

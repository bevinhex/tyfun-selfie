import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Session} from 'meteor/session';

export default class LoginPage extends Component{
  constructor(){
    super();
    this.state={
      image :null
    }
  }
  componentDidMount(){
    Webcam.set({
      image_format:'jpeg',
      jpeg_quality:90
    });
    Webcam.attach('#preview');
  }
  componentWillUnmount(){
    Webcam.reset();
  }
  takePicture(){
    Webcam.snap((image)=>{
      Session.set('image',image);
      browserHistory.push('edit');
    })
  }
	render(){
		return(
      <div className="camera">
        <div id="preview"></div>
        <div id="footer">
          <button type="button" id="takePicture" onClick={this.takePicture.bind(this)} className="btn btn-default center-block">
            <span className="glyphicon glyphicon-camera"></span>
          </button>
        </div>
      </div>
		);
	}
}

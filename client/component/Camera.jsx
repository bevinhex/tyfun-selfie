import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Session} from 'meteor/session';

export default class CameraPage extends Component{
  constructor(){
    super();
    this.state={
      image :null
    }
  }
  componentDidMount(){
    Webcam.on('live',function(){
      $('video').on('loadeddata',function(){
        const w = this.videoWidth;
        const h = this.videoHeight;
        Webcam.set('dest_width',w);
        Webcam.set('dest_height',h);
        Webcam.set('crop_width',w);
        Webcam.set('crop_height',w);
        console.log(Webcam.params);
      });
    });
    //simple hack: give '100%' in order to ignore those value
    Webcam.set({
      image_format:'jpeg',
      jpeg_quality:90,
      //dest_width:720,
      //dest_height:1280,
      //crop_width:720,
      //crop_height:720,
      //width:'100%',
      //height:'100%',
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

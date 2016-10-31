import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CameraToolbar from './CameraToolbar.jsx';

export default class LoginPage extends Component{
  constructor(){
    super();
    this.state={
      image : ''
    }
  }
  componentDidMount(){
    Webcam.set({
      width:320,
      height:240,
      dest_width:640,
      dest_height:480,
      image_format:'jpeg',
      jpeg_quality:90
    });
    Webcam.attach('#webcam');
  }
  take(){
    Webcam.snap((image)=>{
      this.setState({image:image});
    })
  }
	render(){
		return(
      <div>
        <div id="preview"></div>
        <CameraToolbar/>
      </div>
		);
	}
}

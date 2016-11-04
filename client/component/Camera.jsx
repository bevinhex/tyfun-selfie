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
      image_format:'jpeg',
      jpeg_quality:90
    });
    Webcam.attach('#preview');
  }
  take(){
    Webcam.snap((image)=>{
      this.setState({image:image});
    })
  }
	render(){
		return(
      <div className="camera">
        <div id="preview"></div>
        <CameraToolbar/>
      </div>
		);
	}
}

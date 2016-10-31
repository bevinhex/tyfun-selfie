import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class CameraToolbar extends Component{
  constructor(){
    super();
  }
	render(){
		return(
      <footer className="footer">
        <div className="btn-group btn-group-justified" role="group">
          <a className='btn btn-default'>Lef</a>
          <a className='btn btn-default'>Lef</a>
          <a className='btn btn-default'>Lef</a>
          <a className='btn btn-default'>Lef</a>
        </div>
      </footer>
		);
	}
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Session} from 'meteor/session';
import {browserHistory} from 'react-router';

import FilterPanel from './Filter.jsx';
import {Images} from '../../api/collections.js';

export default class EditPage extends Component{
  constructor(){
    super();
    this.state={
      image :null
    }
  }
  componentDidMount(){
    this.setState({
      image:Session.get('image')
    });
    let caman = Caman("#picture",function(){
      //const w = this.image.width;
      //const h = this.image.height;
      //console.log(w + ':' + h );
      //this.crop(w,w,0,(h-w)/2);
      //this.render();
    });
    this.setState({
      caman:caman,
    });
  }
  save(){
    let data = this.state.caman.toBase64('jpg');
    Images.insert({
      rating:0,
      data:data,
      createdAt:new Date()
    });
    browserHistory.push('camera');
  }
  cancel(){
    browserHistory.push('camera');
  }
  tint(e){
    let caman = this.state.caman;
    let filter = e.target.dataset.filter;
    caman.revert(false);
    caman[filter]();
    caman.render();
  }
	render(){
		return(
      <div className="edit">
        <img id="picture" src={this.state.image}></img>
        <div id="footer">
          <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.cancel.bind(this)}>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.save.bind(this)}>
                <span className="glyphicon glyphicon-saved"></span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.save.bind(this)}>
                <span className="glyphicon glyphicon-adjust"></span>
              </button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.tint.bind(this)}>
                <span className="glyphicon glyphicon-tint"></span>
              </button>
            </div>
          </div>
          <FilterPanel onSelect={this.tint.bind(this)} />
        </div>
      </div>
		);
	}
}

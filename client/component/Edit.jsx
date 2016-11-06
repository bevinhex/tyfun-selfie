import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Session} from 'meteor/session';
import {browserHistory} from 'react-router';

import FilterPanel from './Filter.jsx';

export default class EditPage extends Component{
  constructor(){
    super();
    this.state={
      image :null
    }
  }
  componentDidMount(){
    let caman = Caman("#picture");
    this.setState({
      caman:caman,
      image:Session.get('image')
    });
  }
  save(){
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

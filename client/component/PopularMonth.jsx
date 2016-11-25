import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import ReactList from 'react-list';

import UserHList from './UserHList.jsx';

export default class PopularMonth extends Component{
  constructor(){
    super();
    this.state={
    }
  }
  componentDidMount(){
  }
  componentWillUnmount(){
  }
  renderItem(index,key){
    return <UserHList key={key}/>
  }
	render(){
		return(
      <div className="popular">
        <div className="header">Popular of the month</div>
      <div style={{overflowY:'auto',maxHeight:document.documentElement.clientHeight-40}}>
        <ReactList
          itemRenderer={this.renderItem}
          length={1000}
          pageSize={10}
          type='uniform'
          useTranslate3d={true}
          useStaticSize={true}
        />
      </div>
      </div>
		);
	}
}

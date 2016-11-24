import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import ReactList from 'react-list';
//import Faker from 'faker';

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
    function delay(ms) {
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  // Possible memory leak?
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            // d = null;  // Prevent memory leak?
        }
    }
    delay(30);
    return <div key={key}>{faker.name.findName()}</div>;
  }
	render(){
		return(
      <div style={{overflow:'auto',maxHeight:document.documentElement.clientHeight}}>
        <ReactList
          itemRenderer={this.renderItem}
          length={1000}
          pageSize={3}
          type='uniform'
          userTranslate3d={true}
        />
      </div>
		);
	}
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Session} from 'meteor/session';
import {FTScroller} from 'ftscroller';

export default class FilterPanel extends Component{
  constructor(){
    super();
    let filters=[
      "normal",
      "vintage",
      "lomo",
      "clarity",
      "sinCity",
      "sunrise",
      "crossProcess",
      "orangePeel",
      "love",
      "grungy",
      "jarques",
      "pinhole",
      "oldBoot",
      "glowingSun",
      "hazyDays",
      "herMajesty",
      "nostalgia",
      "hemingway",
      "concentrate"
    ];
    this.state = {
      filters:filters
    }
  }
  componentDidMount(){
    new FTScroller(this.refs.panel,{
      scrollbars:false,
      scrollingY:false,
      baseAlignments:{x:0,y:0}
    });
  }
	render(){
    let buttons = this.state.filters.map((name)=>{
      return(
        <button type="button" data-filter={name} key={name} onClick={this.props.onSelect} className="btn btn-default">
          <img src={'filters/'+name+'.png'}/>
          {name}
        </button>
      );
    });
		return(
      <div className="filterPanel" ref="panel">
        <div className="btn-group" role="group">
          {buttons}
        </div>
        <h1>FilterPanel</h1>
      </div>
		);
	}
}

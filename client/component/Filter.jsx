import React, {Component} from 'react';
import ReactList from 'react-list';

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
    /*new FTScroller(this.refs.panel,{
      scrollbars:false,
      scrollingY:false,
      baseAlignments:{x:0,y:0}
    });*/
    //this.refs.panel.style.height = '100px';
  }
  renderItem(index,key){
    const name = this.state.filters[index];
    return(
      <div className="item" data-filter={name} key={key} onClick={this.props.onSelect}/* className="btn btn-default"*/>
        <img src={'filters/'+name+'.png'}/>
        <div className="title">{name}</div>
      </div>
    );
  }
	render(){
		return(
      <div className="filterPanel">
        <div className="list">
        <ReactList
          itemRenderer={this.renderItem.bind(this)}
          axis='x'
          length={19}
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

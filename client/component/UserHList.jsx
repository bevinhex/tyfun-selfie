import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ReactList from 'react-list';

export default class UserHList extends Component{
  constructor(){
    super();
  }
  renderItem(index,key){
    return(
      <div className="item" key={key}>
        <img src={faker.image.imageUrl(64,64,'abstract')+'?'+faker.random.number()}/>
      </div>
    );
  }
	render(){
		return(
      <div className="userhlist">
        <div className="rating">{this.props.index}</div>
        <div className="avatar item">
          <img src={faker.image.imageUrl(64,64,'people')}/>
        </div>
        <div className="list" style={{overflowX:'auto',maxHeight:64}}>
          <ReactList
            itemRenderer={this.renderItem}
            axis='x'
            length={100}
            pageSize={5}
            type='uniform'
            useTranslate3d={true}
            useStaticSize={true}
          />
        </div>
      </div>
		);
	}
}

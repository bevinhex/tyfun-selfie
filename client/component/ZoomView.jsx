import React,{Component} from 'react';
import ReactList from 'react-list';

export default class ZoomView extends Component{
  constructor(){
    super();
  }
  renderItem(index,key){
    return(
      <div className="item" key={key}>
        <img src={faker.image.imageUrl(640,640,'people')}/>
      </div>
    );
  }
  onScroll(e){
    console.log('dd');
  }
  render(){
    return(
      <div className='zoomview' ref='view'>
        <div className="list" onScroll={this.onScroll.bind(this)}>
          <ReactList ref='reactlist'
            itemRenderer={this.renderItem.bind(this)}
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

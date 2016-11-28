import React,{Component} from 'react';
import ReactList from 'react-list';
import 'fullpage.js';

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
  componentDidMount(){
    $('.zoomview').fullpage({
      controlArrows:true,
      navigation:true,
      slidesNavigation:true,
    });
  }
  onScroll(e){
    console.log('dd');
  }
  render(){
    return(
      <div className='zoomview' ref='view'>
        <div className='section'>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
          <div className='slide item'><img src={faker.image.imageUrl(640,640,'people')}/></div>
        </div>
      </div>
    );
  }
}

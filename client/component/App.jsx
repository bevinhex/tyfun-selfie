import React, {Component} from 'react';
import {RouteTransition} from 'react-router-transition';

export default class App extends Component{
	render(){
		return(
			<div className="application">
				<RouteTransition
					pathname={this.props.location.pathname}
					atEnter={{opacity:0}}
					atLeave={{opacity:0}}
					atActive={{opacity:1}}
				>
				{this.props.children}
				</RouteTransition>
			</div>
		);
	}
}

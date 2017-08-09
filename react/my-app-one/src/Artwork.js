import React, { Component } from 'react';
import App from './App';

var Artwork = React.createClass({

 getInitialState: function(){ return {color: randomColor()}},
	  componentDidMount: function(){
	    setInterval(function(){
	      this.setState({color: randomColor()})
	    }.bind(this), 100)
	  },
	  render: function(){
	    return <div><App color={this.state.color} /></div>
	  }
});

function randomColor(){
  return "#" + ("000000" + Math.floor(Math.random()*0xffffff).toString(16)).slice(-6);
}

export default Artwork;
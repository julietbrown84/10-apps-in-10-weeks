 import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
  	componentDidAppear() {
    	console.log('TodoList componentDidAppear')
  	}
  render() {
    return (<div>lorem ipsum</div>)
  }
}

module.exports = Box;

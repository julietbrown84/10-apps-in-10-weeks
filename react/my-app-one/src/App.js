import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({

  render: function() {

    function Hello(props) {
      // Correct! This use of <div> is legitimate because div is a valid HTML tag:
      return <div>Hello {props.toWhat}</div>;
    }

    function HelloWorld() {
      // Correct! React knows <Hello /> is a component because it's capitalized.
      return <Hello toWhat="World" />;
    }

    return (

    <svg width="160" height="300">
     <g>
      <title>Layer 1</title>
      <rect id="svg_1" height="148" width="79" y="129.25" x="44" strokeWidth="5" stroke="#000000" fill={this.props.color}/>
      <circle id="svg_3" r="67.424034" cy="89.25" cx="81" strokeWidth="5" stroke="#000000" fill={this.props.color}/>
      <circle id="svg_5" r="14.317822" cy="77.25" cx="51" strokeWidth="5" stroke="#000000" fill="#000000"/>
      <circle id="svg_6" r="16.27882" cy="80.25" cx="107" strokeWidth="5" stroke="#000000" fill="#000000"/>
     </g>
    </svg>
    )
  }
});


export default App;
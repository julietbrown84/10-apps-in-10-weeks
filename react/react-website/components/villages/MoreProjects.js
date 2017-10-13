import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';
import SectionC from './neighborhoods/Section C.js';
import { Container, Row, Col } from 'react-grid-system';

class Demo extends React.Component {
  	render() {
    	return (
      		<div className="demo">
		        <Header messages={true} title={"Chat Bot Demo"} subtitle={"Watch how it works."}/>
		        <SectionC/>
		        <Footer/>
	     	</div>
    	)
  	}
}

module.exports = Demo;

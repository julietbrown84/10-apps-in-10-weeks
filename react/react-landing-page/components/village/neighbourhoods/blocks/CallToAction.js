 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';

 import Title from './houses/Title.js';
 import SubTitle from './houses/SubTitle.js';
 import Button from './houses/Button.js';
 
 class CallToAction extends React.Component {
 	render() {
	 	return (
	  		<Col lg={12}>
	  			call to action test
	  			<Title />	
	  			<SubTitle />
	  			<Button />
	  		 </Col>
        )
    }
}


module.exports = CallToAction;
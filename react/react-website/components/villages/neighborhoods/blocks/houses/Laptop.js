import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import UserMessage from 'User Message.js';
import ChatBotMessage from 'Chat Bot Message.js';

class Laptop extends React.Component {
  	render() {
    	return (
	      <Col lg={6}>
	        <img className="laptop" src="./images/Laptop.svg" />
	      </Col>
    	)
  	}
}

module.exports = Laptop;

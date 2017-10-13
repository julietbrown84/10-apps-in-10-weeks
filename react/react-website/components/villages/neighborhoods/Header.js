import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Navigation from './blocks/Navigation.js';


class Header extends React.Component {
  render() {
	    return (
	      <section className="header">
	          	<Row>
	            	<Navigation/>
	          	</Row>
	      </section>
	    )
  	}
}

module.exports = Header;



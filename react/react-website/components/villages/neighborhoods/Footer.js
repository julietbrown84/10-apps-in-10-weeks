import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom'
import AboutLink from './blocks/houses/AboutLink.js';
import ContactLink from './blocks/houses/ContactLink.js';
import FooterNavigation from './blocks/FooterNavigation.js';

class Footer extends React.Component {
  	render() {
    	return (
	       	<section className="footer">
	          	<Row>
	            	<FooterNavigation/>
	          	</Row>
	      	</section>
    	)
  	}
}

module.exports = Footer;

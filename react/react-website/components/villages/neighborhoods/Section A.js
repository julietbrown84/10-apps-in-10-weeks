import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import TransitionGroup from 'react-addons-transition-group';
import Carousel from './blocks/Carousel.js';
import Box from './blocks/houses/Box.js';

class SectionA extends React.Component {  
  	render() {
	    return (
	      	<section className="section-a">
	        	<Carousel/>
	      	</section>
	    )
  	}
}


module.exports = SectionA;

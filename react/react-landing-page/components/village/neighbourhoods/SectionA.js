 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 import Slider from './blocks/SliderSlick.js';

 class SectionA extends React.Component {
 	render() {
	 	return (
	  		<section className="section-a">
	              <Container>
	              	<Row>
                 	<Slider />
              		</Row>
	             </Container>
	        </section>
        )
    }
}

module.exports = SectionA;
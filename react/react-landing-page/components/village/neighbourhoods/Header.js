 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';

 import Slider from './blocks/SliderSlick.js';
 import Navigation from './blocks/Navigation.js';
 import CallToAction from './blocks/CallToAction.js';

 class Header extends React.Component {
 	render() {
	 	return (
	  		<section className="header">
	              <Container>
                  <Row>
                    <Slider />
                  </Row>
	              	<Row>
                 		<Navigation />
              		</Row>
              		<Row>
                    <CallToAction />
              		</Row>
	             </Container>
	        </section>
        )
    }
}

module.exports = Header;
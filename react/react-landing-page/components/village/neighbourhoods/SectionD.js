 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 import Slider from './blocks/SliderSlick.js';

 class SectionD extends React.Component {
 	render() {
	 	return (
	  		<section className="section-d"> 
	              	<Row>
                 	<Slider />
              		</Row>
	        </section>
        )
    }
}

module.exports = SectionD;
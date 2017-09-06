 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 

 import ImageBanner from './blocks/houses/ImageBanner.js';

 class SectionB extends React.Component {
 	render() {
	 	return (
	  		<section className="section-b">
	  		 	<Container>
	              	<Row>
	             	<ImageBanner />
	          		</Row>
          		</Container>
	        </section>
        )
    }
}


module.exports = SectionB;
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 import HeaderNavigation from './blocks/houses/HeaderNavigation.js';
 import Title from './blocks/houses/Title.js';
 import Canvas from './blocks/houses/Canvas.js';
 import SubTitle from './blocks/houses/SubTitle.js';


 class SectionA extends React.Component {
 	render() {
	 	return (
	  		<section className="section-a">
	              	<Row>
	              	    <Col lg={8}>
                 	    <Title/>
                 	    </Col>
                 	    <Col lg={4}>
                 	    <Canvas/>
			            <SubTitle/>
			          	</Col>
              		</Row>
              		  <div>
			        </div>
	   
	        </section>
        )
    }
}

module.exports = SectionA;
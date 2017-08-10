 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';

 import Navigation from './blocks/Navigation.js';
 import CallToAction from './blocks/CallToAction.js';

 class Header extends React.Component {
 	render() {
	 	return (
	  		<section className="header">
	              <Container>
                  <Row>
                  <div className="header__container">
                      <div className="main-navigation container">
                        <i className="icon icon--logo" />
              
                      </div>

                      <div className="logo">
                        <div className="logo-canvas">
                      </div>

                    </div>
                  </div>
                  </Row>
                  <Row>
                  
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
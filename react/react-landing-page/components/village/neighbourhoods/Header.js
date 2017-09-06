 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';

 import Navigation from './blocks/Navigation.js';
 import CallToAction from './blocks/CallToAction.js';
 import HeaderNavigation from './blocks/houses/HeaderNavigation.js';
 import Logo from './blocks/houses/Logo.js';

 class Header extends React.Component {
 	render() {
	 	return (
	  		<section className="header">
                  <Row>
                  <div className="header container">
                
                    <Col sm={6}>
                          <div className="main-navigation container">
                              <i className="icon icon--hamburger"></i>
                              <Navigation/>
                        </div>
                      </Col>

                      <Col sm={5}>
                        <div className="header-navigation">
                          <HeaderNavigation/>
                        </div>
                      </Col>

                      <Col sm={1}>
                                          
                        <Logo/>

                      </Col>
              
                  </div>
                  </Row>
           
              	
	        </section>
        )
    }
}

module.exports = Header;
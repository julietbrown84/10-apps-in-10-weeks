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
                        <div>
                            <ul className='header-nav-projects'>
                                 <li className="list"><a className="link" href="">PROJECTS</a></li>
                            </ul>
                          </div>
                      </Col>
                        <Col sm={4}>                  
                            <Logo/>
                        </Col>

                      <Col sm={2}>
                        <div className="header-navigation">
                          <HeaderNavigation/>
                        </div>
                      </Col>

                  </div>
                  </Row>
           
              	
	        </section>
        )
    }
}

module.exports = Header;
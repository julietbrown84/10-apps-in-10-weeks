 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 class Footer extends React.Component {
 	render() {
	 	return (
	  		<section className="footer">
	               <Row>
               
                    <Col sm={6}>
                        <div>
                            <ul className='footer-nav-projects'>
                                 <li className="list"><a className="link" href="">ABOUT ME</a></li>
                            </ul>
                          </div>
                      </Col>

                        <Col sm={4}>                  
                      		<div className='footer-title'>
                                <li className="list"><a className="link" href="">JULIET BROWN</a></li>
                                <li className="list"><a className="link" href="">Front end developer, artist,devloper</a></li>
                            </div>
                        </Col>

                      <Col sm={2}>
                        <div className="footer-navigation">
                         	<ul className='footer-nav-projects'>
                                <li className="list"><a className="link" href="">CONTACT</a></li>
                            </ul>
                        </div>
                      </Col>

               
                  </Row>
	        </section>
        )
    }
}

module.exports = Footer;
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Container, Row, Col } from 'react-grid-system';
 
 class Footer extends React.Component {
 	render() {
	 	return (
	  		<section className="footer">
	                <Col sm={12}>
	              	<Row>
             		   <footer className="footer">
			                <div className="footer container section-container">
			                     <div className="footer__logo"></div>
			          
			                    <div className="icon icon--footer-email"></div>
			                    <div className="icon icon--facebook"></div>
			                    <div className="icon icon--twitter"></div>
			                    <div className="footer text">JULIET BROWN 2017 ©<span className="red-dot">.</span></div>
			                </div>  
			            </footer>
              		</Row>
              		  </Col>
	        </section>
        )
    }
}

module.exports = Footer;
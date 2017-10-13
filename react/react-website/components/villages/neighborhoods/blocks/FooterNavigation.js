import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import AboutLink from './houses/AboutLink.js';
import ContactLink from './houses/ContactLink.js';

class FooterNavigation extends React.Component {
    render() {
        return (
            <div>
                <Col sm={1}>
                    <AboutLink/>
                </Col>

                <Col sm={10}> 
                    <div className="footer__logo">
        				<a className="footer__link" href="#">
        					JULIET BROWN
        				</a>

        				<a className="footer__link-bottom" href="#">
        					CREATIVE
        				</a>
        			</div>
                </Col>

                <Col sm={1}>
                    <ContactLink/>
                </Col>
            </div>
        )
    }
}

module.exports = FooterNavigation;


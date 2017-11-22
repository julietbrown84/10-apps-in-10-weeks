import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import * as Animated from "animated/lib/targets/react-dom";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animateLeft: new Animated.Value(0),
            animateRight: new Animated.Value(0),
        };
    }

    componentWillAppear(cb) {
        Animated.spring(this.state.animateLeft, { toValue: 1 }).start();
        Animated.spring(this.state.animateRight, { toValue: 1 }).start();
        cb();
    }

    componentWillEnter(cb) {
        setTimeout(
            () => {
                Animated.spring(this.state.animateLeft, { toValue: 1}).start();
            },
            500
        );
        setTimeout(
            () => {
                Animated.spring(this.state.animateRight, { toValue: 1}).start();
            },
            800
        );
        cb();
    }

    componentWillLeave(cb) {
        Animated.spring(this.state.animateLeft, { toValue: 0 }).start();
        Animated.spring(this.state.animateRight, { toValue: 0 }).start();
        setTimeout(() => cb(), 400);
    }

   render() {
        const leftStyle = {
            opacity: Animated.template`${this.state.animateLeft}`,
            transform: Animated.template`
                translate3d(0,${this.state.animateLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["12px", "0px"]
                })},0)
            `
        };

        const rightStyle = {
            opacity: Animated.template`${this.state.animateRight}`,
            transform: Animated.template`
                translate3d(${this.state.animateRight.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["24px", "0px"]
                })},0,0)
            `
        };

        return (
            <div className="contact">
                <Header messages={true} title={"Chat Bot contact"} subtitle={"Watch how it works."}/>
	    	        <div className="">
                        <div className="contact__container">
                            <Animated.div style={leftStyle}>
                                <Col sm={6}>
                                    <div className="contact__block-one">
                                        <div>
                                            <img height="400px" className="article-cover" src="./images/home-page-image-one.jpg" /> 
                                        </div>
                                    </div>
                                </Col>
                            </Animated.div>

                            <Col sm={6}>
                              <Animated.div style={rightStyle}>
                                <div className="contact__block-two">
                                    <div className="contact__title">Contact Page</div>

                                        <div className="contact__section-one">

                                            <div className="contact__subtext contact__subtext--uppercase">
                                              creative: web Animator, Web Developer, & Artist         
                                            </div>

                                            <div className="contact__email">
                                              julietbrown84@gmail.com 
                                            </div>

                                            <div className="contact__subtext">
                                              lksdjflksjdflkjsdlkfjdlskfjlsdkf        
                                            </div>

                                            <div className="contact__box contact__box--long">
                                              google map
                                            </div>

                                            <div className="contact__subtext contact__subtext--back">
                                              Vous pouvez également nous écrire ou nous appeler.  
                                            </div>
                                       
                                        </div>

                                        <div className="contact__section-two">
                                            <div className="contact__box">
                                              022 5434534
                                            </div>
                                            <div className="contact__box">
                                              dkfjdkf
                                            </div>
                                        </div>

                                        <div className="contact__icon-sub-text">
                                          dkfjdkfsdlklfjdslkfjsd
                                        </div>

                                        <Link activeClassName="active" className="link" to="https://instagram.com/username" target="_blank">
                                            <svg className="icon-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                               width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" space="preserve">
                                               <path id="facebook" fill="#c2a571" d="M17.252,11.106V8.65c0-0.922,0.611-1.138,1.041-1.138h2.643V3.459l-3.639-0.015
                                              c-4.041,0-4.961,3.023-4.961,4.961v2.701H10v4.178h2.336v11.823h4.916V15.284h3.316l0.428-4.178H17.252z"/>
                                            </svg>
                                        </Link>

                                    <Link activeClassName="active" className="link" to="https://instagram.com/username" target="_blank">
                                        <svg className="icon-border" version="1.1" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" space="preserve">
                                           <path id="instagram" fill="#c2a571" d="M22.107,3.415H7.893c-2.469,0-4.479,2.007-4.479,4.477v4.73v9.486c0,2.469,2.01,4.479,4.479,4.479h14.215
                                          c2.469,0,4.479-2.01,4.479-4.479v-9.486v-4.73C26.586,5.421,24.576,3.415,22.107,3.415 M23.393,6.086l0.512-0.004v0.511v3.416
                                          l-3.916,0.014l-0.012-3.928L23.393,6.086z M11.693,12.622c0.742-1.028,1.945-1.7,3.307-1.7s2.564,0.672,3.307,1.7
                                          c0.484,0.67,0.771,1.49,0.771,2.379c0,2.248-1.828,4.078-4.078,4.078c-2.248,0-4.078-1.83-4.078-4.078
                                          C10.922,14.112,11.211,13.292,11.693,12.622 M24.328,22.107c0,1.225-0.994,2.219-2.221,2.219H7.893
                                          c-1.225,0-2.219-0.994-2.219-2.219v-9.486h3.459C8.832,13.356,8.664,14.159,8.664,15c0,3.494,2.842,6.335,6.336,6.335
                                          s6.336-2.842,6.336-6.335c0-0.842-0.17-1.645-0.467-2.379h3.459V22.107z"/>
                                        </svg>
                                    </Link>

                                    <Link activeClassName="active" className="link" to="https://instagram.com/username" target="_blank">
                                        <svg className="icon-border" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                           width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" space="preserve">
                                           <path id="facebook" fill="#c2a571" d="M17.252,11.106V8.65c0-0.922,0.611-1.138,1.041-1.138h2.643V3.459l-3.639-0.015
                                          c-4.041,0-4.961,3.023-4.961,4.961v2.701H10v4.178h2.336v11.823h4.916V15.284h3.316l0.428-4.178H17.252z"/>
                                        </svg>
                                     </Link>

                                    <Link activeClassName="active" className="link" to="https://instagram.com/username" target="_blank">
                                        <svg className="icon-border" version="1.1" xmlns="http://www.w3.org/2000/svg" link="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                           width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" space="preserve">
                                           <path id="instagram" fill="#c2a571" d="M22.107,3.415H7.893c-2.469,0-4.479,2.007-4.479,4.477v4.73v9.486c0,2.469,2.01,4.479,4.479,4.479h14.215
                                          c2.469,0,4.479-2.01,4.479-4.479v-9.486v-4.73C26.586,5.421,24.576,3.415,22.107,3.415 M23.393,6.086l0.512-0.004v0.511v3.416
                                          l-3.916,0.014l-0.012-3.928L23.393,6.086z M11.693,12.622c0.742-1.028,1.945-1.7,3.307-1.7s2.564,0.672,3.307,1.7
                                          c0.484,0.67,0.771,1.49,0.771,2.379c0,2.248-1.828,4.078-4.078,4.078c-2.248,0-4.078-1.83-4.078-4.078
                                          C10.922,14.112,11.211,13.292,11.693,12.622 M24.328,22.107c0,1.225-0.994,2.219-2.221,2.219H7.893
                                          c-1.225,0-2.219-0.994-2.219-2.219v-9.486h3.459C8.832,13.356,8.664,14.159,8.664,15c0,3.494,2.842,6.335,6.336,6.335
                                          s6.336-2.842,6.336-6.335c0-0.842-0.17-1.645-0.467-2.379h3.459V22.107z"/>
                                        </svg>
                                    </Link>
                                </div>
                              </Animated.div>
                            </Col>
                        </div>
	    	         </div>
                <Footer/>
            </div>
        )
    }
}

module.exports = Contact;

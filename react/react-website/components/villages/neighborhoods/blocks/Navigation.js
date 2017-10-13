import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Branding from './houses/Branding.js';
import DemoLink from './houses/Demo Link.js';

class Navigation extends React.Component {
    render() {
        return (
              <div>
                <Col sm={1}>
                  <Branding/>
                </Col>
                 <Col sm={10}> 
                    <div className="header__logo">     
                        <svg width="280px" height="40px" viewBox="0 0 502.7 237.7">
                          <ellipse className="logo-m-left-2"  cx="151.5" cy="118.4" rx="150.8" ry="118" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.75"/>
                          <path d="M388.6,268.8a25.9,25.9,0,0,0,10.3,2c2.2,0,4.6-.4,6.3-1.9a27.2,27.2,0,0,0,2.6-3.4c3.5-4.4,11-4.4,15.6-1s6.7,9,7.3,14.5a21.5,21.5,0,0,1-1.6,11.5,17.5,17.5,0,0,1-16.4,9.5,6.6,6.6,0,0,1-3.9-1.2,11.6,11.6,0,0,1-2.2-3.4c-2.9-5.1-10.8-6.7-15.7-3.3s-5.9,10.1-6.2,15.9q-0.7,13.6-.2,27.2" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M384.2,335.4q28,0.9,56-.9c4.9-.3,9.9-0.7,14.7.4" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M454.9,334.6c3.6,2.1,6.6,6.1,5.1,9.8s-9.6,4.8-12.6,9.1a3.1,3.1,0,0,0-.6,1.9,3.7,3.7,0,0,0,1.9,2.6c3.2,2.2,7.3,2.9,11.2,3.5l19.9,2.9" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M480.3,364.4a100.5,100.5,0,0,0,22.3-6.6c1.4-.6,2.9-1.3,3.5-2.6,1.6-3.1-2.5-6.2-6.1-7s-8.1-1.7-8.9-5.1,1.1-4.7,3.3-5.8,4.7-1.3,7.2-1.5q30.3-2,60.7-1.4" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M562.9,334.6q0.6-18.9,1.6-37.7a6.7,6.7,0,0,1,.8-3.3c1.1-1.8,3.5-2.2,5.7-2.5s4.4-.5,6.4.5,3.2,3.4,4.7,5.2,4.1,3.4,6.2,2.3" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M589,299a18.6,18.6,0,0,0,16.9-7.5,16.7,16.7,0,0,0,.6-17.7c-2.3-3.8-6-6.7-10.1-8.8s-7-2.8-9.8-.9a21.3,21.3,0,0,0-2.8,2.9c-2.4,2.4-5.9,3.4-9.4,3.8s-9.4-.4-11.6-4c-1.2-1.9-1.2-4.3-1.2-6.5q-0.1-12.2.1-24.4" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M561.1,237.3a12.3,12.3,0,0,0-.6-6.7,3.8,3.8,0,0,0-1.4-2,5.5,5.5,0,0,0-3.3-.4,330.2,330.2,0,0,1-66.1-1.3c-2.5-.3-5.4-0.9-6.4-3s2.7-6,6.4-6.7,8.1-1.1,9.9-4.1-0.8-6.9-4.3-8.3-7.5-.9-11.3-0.4" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M487.7,204.5a61.4,61.4,0,0,0-34.4-.9c-2.7.7-5.5,1.7-7.4,3.7s-2.5,5.4-.6,7.4,8.2,2,9.9,5.3,0.1,4.2-.8,6.1a3.7,3.7,0,0,1-1,1.5,4.2,4.2,0,0,1-2.7.5,355.2,355.2,0,0,0-39.8,1.1" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/><path d="M412.4,229.3l-25.9-.8a1.7,1.7,0,0,0-1,.2,1.5,1.5,0,0,0-.4,1.5,67.6,67.6,0,0,1-.6,13.9l-0.3,2.6a49.4,49.4,0,0,0-.4,11.1,17,17,0,0,0,4.4,10.1" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.5"/>
                          <path d="M479.2,162.7c83.3,0,150.8,52.8,150.8,118" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.75"/>
                          <path d="M328.4,280.6c0-65.2,67.5-118,150.8-118" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.75"/>
                          <path d="M479.2,398.6c-83.3,0-150.8-52.8-150.8-118" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.75"/>
                          <path d="M630,280.6c0,65.2-67.5,118-150.8,118" transform="translate(-328 -161.3)" fill="none" stroke="#3d2c2c" strokeMiterlimit="10" strokeWidth="0.75"/>
                        </svg>
                    </div>
                </Col>

                <Col sm={1}>
                  <DemoLink/>
                </Col>
            </div>
        )
    }
}

module.exports = Navigation;


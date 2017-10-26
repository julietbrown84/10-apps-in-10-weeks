import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';
import SectionB from './neighborhoods/Section B.js';
import { Container, Row, Col } from 'react-grid-system';
import moreProjects from './neighborhoods/MoreProjects.js';

class Demo extends React.Component {
    render() {
        return (
            <div className="demo">
                <Header messages={true} title={"Chat Bot Demo"} subtitle={"Watch how it works."}/>
                <moreProjects/>
                <SectionB/>
                <Footer/>
            </div>
        )
    }
}

module.exports = Demo;

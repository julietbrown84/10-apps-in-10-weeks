import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Header from './village/neighbourhoods/Header.js';
import SectionD from './village/neighbourhoods/SectionD.js';
import Footer from './village/neighbourhoods/Footer.js';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Header />
        <Footer />
      </div>
    )
  }
}

module.exports = Projects;
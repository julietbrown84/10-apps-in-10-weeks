import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Header from './village/neighbourhoods/Header.js';
import SectionA from './village/neighbourhoods/SectionA.js';
import SectionB from './village/neighbourhoods/SectionB.js';
import SectionC from './village/neighbourhoods/SectionC.js';
import SectionD from './village/neighbourhoods/SectionD.js';
import Footer from './village/neighbourhoods/Footer.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
      </div>
    )
  }
}

module.exports = LandingPage;
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Header from './village/neighbourhoods/Header.js';
import SectionA from './village/neighbourhoods/SectionA.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
      test
       
        <Header />
        <SectionA />
       
     
      </div>
    )
  }
}

module.exports = LandingPage;
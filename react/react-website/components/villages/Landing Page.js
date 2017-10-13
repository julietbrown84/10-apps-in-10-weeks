import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import Footer from './neighborhoods/Footer.js';

class LandingPage extends React.Component {
  	render() {
    	return (
      		<div className="landing-page">
        		<Header messages={false} title={"Developer Bot for Slack"} subtitle={"One article to one random person in your Slack group. Once a day."}/>
        		<SectionA/>
        		<Footer/>
      		</div>
    	)
  	}
}

module.exports = LandingPage;

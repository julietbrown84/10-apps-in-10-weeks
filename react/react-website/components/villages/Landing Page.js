import React from 'react';
import ReactDOM from 'react-dom';
import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import Footer from './neighborhoods/Footer.js';
import { connect } from 'react-redux';


// import { activateGeod, closeGeod, } from '../villages/components/redux/redux';

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


// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  //geod: state.geod,
});

const mapDispatchToProps = {
  //activateGeod,
  //closeGeod,
};

//const AppContainer = connect(
  //mapStateToProps,
  //mapDispatchToProps
//)(App);

module.exports = LandingPage;

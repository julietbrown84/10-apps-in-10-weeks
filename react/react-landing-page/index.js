import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/LandingPage.js';
import Projects from './components/Projects.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
       <Router>
          <div>
               <Route exact path="/" component={LandingPage}/>
  				      <Route path="/projects" component={Projects}/>
          </div>
       </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
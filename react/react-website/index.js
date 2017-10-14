import React from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';
import LandingPage from './components/villages/Landing Page.js';
import Demo from './components/villages/Demo.js';
import About from './components/villages/About.js';
import Contact from './components/villages/Contact.js';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/redux';

// Stylesheets
import './styles/landing-page.scss';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/demo" component={Demo}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>  
                    <Route path="/demo/project" component={Demo}/> 
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

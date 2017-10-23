import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
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
                <Route render={({ location }) => (
                    <div style={styles.fill}>
                        <Route exact path="/" component={LandingPage}/>

                        <Route exact path="/" render={() => (
                            <Redirect to="/"/>
                        )}/>

                        <Route path="/demo" component={Demo}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>  
                        <Route path="/demo/project" component={Demo}/> 

                        <CSSTransitionGroup style={styles.content}
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            <Route
                              location={location}
                              key={location.key}
                              path="/:h/:s/:l"
                              component={HSL}
                            />
                        </CSSTransitionGroup>
                    </div>
                )}/>
            </Router>
        )
    }
}

const HSL = ({ match: { params } }) => (
  <div style={{
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  // styles.fill,
  top: '40px',
  textAlign: 'center',
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

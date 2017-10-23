import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Subpage from "./SubPage";
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Home {...rest} />}
            </TransitionGroup>
        )}/>
        <Route
           path="/subpage"
           children={({ match, ...rest }) => (
             <TransitionGroup component={firstChild}>
               {match && <Subpage {...rest} />}
             </TransitionGroup>
        )}/>
      </div>
    );
  }
}

export default App;
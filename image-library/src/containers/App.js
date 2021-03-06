import React, { Component } from 'react';
import Header from '../common/Header';
import PropTypes from 'prop-types'; 

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};
export default App;

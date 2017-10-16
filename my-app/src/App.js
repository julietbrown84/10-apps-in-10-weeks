import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
            <Grid>
              <h1>Search app</h1>
              <p>This is a simple search app</p>
              <SearchForm />
            </Grid>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;

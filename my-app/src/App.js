import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Jumbotron} from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ gifs: responseData.data });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    // performSearch = () {

    // }

    render() {
        console.log(this.state.gifs);
        return (
          <div className="App">
            <Jumbotron>
                <Grid>
                  <h1>Search app</h1>
                  <p>This is a simple search app</p>
                  <SearchForm />
                </Grid>
            </Jumbotron>
            <GifList data={this.state.gifs} />
          </div>
    );
  }
}

export default App;

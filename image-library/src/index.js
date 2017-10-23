import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';

// We require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Router routes={routes} />, 
    document.getElementById('root')
);
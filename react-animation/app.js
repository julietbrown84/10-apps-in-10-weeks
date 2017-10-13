import React from 'react';
import {render} from 'react-dom';

const Home = () => {
    return (
        <h2>{'TutsPlus - Welcome to React Animations!'}</h2>
    );
};

render(
    <Home />,
    document.getElementById('app')
);c
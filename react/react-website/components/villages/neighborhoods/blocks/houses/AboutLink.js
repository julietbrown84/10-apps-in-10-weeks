import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class AboutLink extends React.Component {
    render() {
        return (
            <div className="flex">
                <Link activeClassName="active" className="link" to="/about">
                    <span className="bttn about-link text">ABOUT</span>
                    <span className="line -right"></span>
                    <span className="line -top"></span>
                    <span className="line -left"></span>
                    <span className="line -bottom"></span>
                </Link>
            </div>
        )
    }
}

module.exports = AboutLink;

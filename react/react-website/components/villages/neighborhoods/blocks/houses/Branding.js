import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Branding extends React.Component {
    render() {
        return (
               <div className="flex">
                    <Link IndexLink to="/" className="link" activeClassName="active">
                        <span className="bttn branding text">HOME</span>
                        <span className="line -right"></span>
                        <span className="line -top"></span>
                        <span className="line -left"></span>
                        <span className="line -bottom"></span>
                    </Link>
                </div>
            )
        }
}

module.exports = Branding;

import { Link } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';


class ProjectLink extends React.Component {
  render() {
    return (
       <div>
          <Link to="/projects">
            <span className="projects">
           	Projects
           	console.log('test');
            </span>
          </Link>
       </div>
    )
  }
}

module.exports = ProjectLink;
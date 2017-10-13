import React from 'react';
import ReactDOM from 'react-dom';

class HeaderNavigation extends React.Component {
  render() {
    return (
      <div>
      	<ul className='header-nav-list'>
      		 <li className="list"><a className="link" href="">THE STUDIO</a></li>
      	 </ul>
      </div>
    )
  }
}

module.exports = HeaderNavigation;
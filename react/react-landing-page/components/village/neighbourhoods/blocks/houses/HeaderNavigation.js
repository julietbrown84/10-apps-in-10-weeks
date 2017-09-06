import React from 'react';
import ReactDOM from 'react-dom';

class HeaderNavigation extends React.Component {
  render() {
    return (
      <div>
      	<ul className='header-nav-list'>
      		 <li className="list"><a className="link" href="">Art Portfolio</a></li>
      		 <li className="list"><a className="link" href="">Web Animation</a></li>
      		 <li className="list"><a className="link" href="">Design</a></li>
      	   <li className="list"><a className="link" href="">About</a></li>
      	   <li className="list"><a className="link" href="">Blog</a></li>
      	 </ul>
      </div>
    )
  }
}

module.exports = HeaderNavigation;
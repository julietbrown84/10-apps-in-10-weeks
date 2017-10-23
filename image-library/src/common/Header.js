import React from 'react';
import Link from 'link-react';
import { Route } from 'react-router';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <Route to="/" activeClassName="active">Home</Route>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
);

export default Header;
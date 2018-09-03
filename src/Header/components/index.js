import React from 'react';
import { Link, } from 'react-router-dom';
import './index.scss';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <div className="nav-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </div>
      </ul>
    </nav>
  </header>
);

export default Header;

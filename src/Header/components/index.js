import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Navbar, Col,
} from 'react-materialize';
import Logo from '../../assets/logo.png';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Navbar style={{ backgroundColor: '#3498db', }}>
    <Col s={8} offset="s2">
      <Col s={6}><img height="70" width="80" src={Logo} alt="Loading ..." /></Col>
      <Col s={6}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/article">New</Link></li>
        </ul>
      </Col>
    </Col>
  </Navbar>
);

Header.propTypes = {};

export default Header;

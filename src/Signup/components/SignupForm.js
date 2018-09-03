import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import './Signup.scss';

const Logo = require('../../assets/logo.png');

const SignupForm = ({ onChange, onClick, error, }) => (
  <div className="container flex-container">
    <div className="card">
      <div className="box" id="sign-up">
        <div className="logo">
          <img src={Logo} alt="App logo" style={{ width: '200px', height: '200px', }} />
        </div>
        <div>
          <h2 className="title"> Sign up now </h2>
        </div>
      </div>
      <div className="form">
        <form>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              required
              onChange={onChange}
            />
            <div>{error.username}</div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              onChange={onChange}
            />
            <div>{error.email}</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Create your password"
              required
              onChange={onChange}
            />
            <div>{error.password}</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Confirm your password"
              required
              onChange={onChange}
            />
            <div>{error.password}</div>
          </div>
          <button type="submit" name="signup" onClick={onClick}>
            Sign up for free
          </button>
          <div className="clear">
            Already have an account?
            <Link to="/login"> Login </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignupForm;

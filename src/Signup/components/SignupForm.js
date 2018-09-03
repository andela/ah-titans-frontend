import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Button, Card, Row, Col, Input,
} from 'react-materialize';
import './Signup.scss';

<<<<<<< HEAD
const SignupForm = ({ onChange, onClick, }) => (
  <div style={{ marginTop: '10%', }}>
    <Row>
      <Col s={8} offset="s2">
        <Card textClassName="black-text" title="Sign up">
          <Row>
            <Input s={6} label="Username:" onChange={onChange} />
            <Input s={6} type="email" label="Email:" onChange={onChange} />
            <Input s={6} type="password" label="Password:" onChange={onChange} />
            <Input s={6} type="password" label="Repeat password:" onChange={onChange} />
            <Col s={6}>
              <Button s={6} className="blue" waves="light" onClick={onClick}>
                SIGNUP
              </Button>
            </Col>
            <Col s={6}>
              Have an Account?
              <Link to="/login">Login</Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
=======
const Logo = require('../../assets/logo.png');

const SignupForm = ({
  onChange, onClick, error, isFetching,
}) => (
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
          <button type="submit" name="signup" onClick={onClick} disabled={isFetching}>
            {isFetching ? 'Signing up...' : 'Sign up for free'}
          </button>
          <div className="clear">
            Already have an account?
            <Link to="/login"> Login </Link>
          </div>
        </form>
      </div>
    </div>
>>>>>>> [Feature #160011175] Add error handling
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignupForm;

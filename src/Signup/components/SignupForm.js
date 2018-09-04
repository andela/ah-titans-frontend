import React from 'react';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Row,
  Col,
  Input,
} from 'react-materialize';
import './Signup.scss';

const SignupForm = () => (
  <div style={{ marginTop: '10%', }}>
    <Row>
      <Col s={8} offset="s2">
        <Card textClassName="black-text" title="Sign up">
          <Row>
            <Input s={6} label="Username:" />
            <Input s={6} type="email" label="Email:" />
            <Input s={6} type="password" label="Password:" />
            <Input s={6} type="password" label="Repeat password:" />
            <Col s={6}>
              <Button s={6} className="blue" waves="light">
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
  </div>
);

SignupForm.propTypes = {};

export default SignupForm;

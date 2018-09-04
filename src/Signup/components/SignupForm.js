import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Button, Card, Row, Col, Input,
} from 'react-materialize';
import './Signup.scss';

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
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignupForm;

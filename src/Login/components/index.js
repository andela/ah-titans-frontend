import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Col, Card, Row, Input, Button,
} from 'react-materialize';

const LoginForm = () => (
  <Row style={{ marginTop: '5%', }}>
    <Col m={6} s={12} offset="m3">
      <Card textClassName="blacktext" title="Login">
        <Row>
          <Input type="email" label="Email" s={12} />
          <Input type="password" label="password" s={12} />
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Button waves="light">login with email</Button>
          </Col>
          <Col m={6} s={12}>
            <p style={{ color: 'black', }}>
              Not a member?
              <Link to="/signup"> Signup</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Button waves="light" style={{ backgroundColor: 'red', }}>Login with google account</Button>
          </Col>
          <Col m={6} s={12}>
            <Button waves="light" style={{ backgroundColor: '#1aa3ff', }}>Login with facebook account</Button>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

LoginForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginForm;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import {
  Col, Card, Row, Input, Button,
} from 'react-materialize';

const ResetPassForm = () => (
  <Row style={{ marginTop: '5%', }}>
    <Col m={4} s={12} offset="m4">
      <Card textClassName="blacktext" title="Reset Password">
        <Row>
          <Input type="email" label="Email" s={12} />
        </Row>
        <Row>
          <Col m={8} s={12}>
            <Button waves="light">Reset Password</Button>
          </Col>
          <Col m={4} s={12}>
            <Link to="/login">Login instead?</Link>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

ResetPassForm.propTypes = {};

export default ResetPassForm;

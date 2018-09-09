import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, } from 'react-router-dom';
import {
  Card, Col, Row, Icon, Button, Pagination, Input,
} from 'react-materialize';
import './index.scss';

const ArticlesForm = () => (
  <Row className="home">
    <Row>
      <Col s={2}>
        <Button>Search By</Button>
      </Col>
      <Col s={10} className="searchbar">
        <div className="input-field">
          <input id="search" type="search" required />
          <label htmlFor="search">
            <Icon>search</Icon>
          </label>
          <Icon>close</Icon>
        </div>
      </Col>
    </Row>
    <Col m={6} s={12}>
      <Card
        className="grey lighten-4"
        textClassName="black-text"
        title="How to train your dragon"
        actions={[
          <Icon className="icons">share</Icon>,
          <Icon className="icons">bookmark</Icon>,
          <a href="#">READ MORE</a>,
        ]}
      >
        <h6>Tag List: dragon training</h6>
        <Icon className="icons">star</Icon>
        <Icon className="icons">star</Icon>
        <Icon className="icons">star</Icon>
        <Icon className="icons">star</Icon>
        <Icon className="icons">star</Icon>
        <span>5</span>
        <p>
          {' '}
          <Icon className="icons">favorite</Icon>
        </p>
        <p>
          <i className="about">Wanna know how not to get devoured?</i>
        </p>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
        </p>
        <hr />
        <div className="writtenby">By James Pink Follow 01/08/2018 08:12am</div>
      </Card>
    </Col>
    <Col s={12}>
      <Row className="pagination">
        <Pagination items={10} activePage={2} maxButtons={8} />
      </Row>
    </Col>
    <Button floating large className="green" waves="light" icon="add" />
  </Row>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;

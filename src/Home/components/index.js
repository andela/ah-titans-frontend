import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, } from 'react-router-dom';
import {
  Card,
  Col,
  Row,
  Icon,
  Button,
  Pagination,
  Chip,
} from 'react-materialize';
import './index.scss';
import CreateArticleButton from './btnCreateArticle';

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
    <Col s={5}>
      <Card
        className="grey lighten-4"
        textClassName="black-text"
        title="How to train your dragon"
        actions={[
          <a href="#" style={{ color: 'green' }}>
            <Icon className="icons">share</Icon>
          </a>,
          <a href="#" style={{ marginLeft: '250px', color: 'green' }}>
            READ MORE
          </a>,
        ]}
      >
        <Chip>dragon</Chip>
        <br />
        <br />
        <p>
          <i className="about">Wanna know how not to get devoured?</i>
        </p>
        <br />
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud...
        </p>
        <br />
        <div className="writtenby">
          By: James Pink{' '}
          <a href="url" className="follow">
            Follow
          </a>
          01/08/2018 08:12am
        </div>
      </Card>
    </Col>
    <Col s={12}>
      <Row className="pagination">
        <Pagination items={10} activePage={2} maxButtons={8} />
      </Row>
    </Col>
    <Col s={12}>
      <Button floating large className="green" waves="light" icon="add" />
    </Col>
  </Row>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;

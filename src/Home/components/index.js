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
import Tag from 'react-materialize/lib/Tag';

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
    <Col s={6}>
      <Card
        className="grey lighten-4"
        textClassName="black-text"
        title="How to train your dragon"
        actions={[
          <button class="btn waves-effect waves-light blue-grey">
            <i class="material-icons">share</i>
          </button>,
          <button class="btn waves-effect waves-light blue-grey">
            <i class="material-icons">thumb_up</i>
            <span>77</span>
          </button>,
          <button class="btn waves-effect waves-light blue-grey">
            <i class="material-icons">thumb_down</i>
            <span>19</span>
          </button>,
          <a class="right blue-grey-text" href="http://www.tutorialspoint.com">
            Read more...
          </a>,
        ]}
      >
        <Chip>dragon training</Chip>
        <p class="ratings">
          <i class="material-icons icon-orange">star</i>
          <i class="material-icons icon-orange">star</i>
          <i class="material-icons icon-orange">star</i>
          <i class="material-icons icon-orange">star</i>
          <i class="material-icons icon-orange">star_half</i>
          <div class="stat">4.6</div>
        </p>
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

    <Button
      floating
      large
      className="green add-article"
      waves="light"
      icon="add"
    />
  </Row>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;

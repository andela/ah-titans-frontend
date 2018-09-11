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
  Input,
  Chip,
} from 'react-materialize';
import './index.scss';
import Tag from 'react-materialize/lib/Tag';

const ArticlesForm = () => (
  <Row className="home">
    <Col>
      <Row>
        <Col s={12} m={10}>
          <div className="search-bar">
            <Button>Search By</Button>
            {/* </Col> */}

            {/* <Col s={12} m={8}> */}
            <div className="input-field">
              <input id="search" type="search" required />
              <label htmlFor="search">
                <Icon>search</Icon>
              </label>
              <Icon>close</Icon>
            </div>
          </div>
        </Col>
      </Row>

      <Col m={6} s={12} className="articles">
        <Card
          className="grey lighten-4"
          textClassName="black-text"
          title="How to train your dragon"
          actions={[
            <button className="btn waves-effect waves-light blue-grey">
              <i className="material-icons">share</i>
            </button>,
            <button className="btn waves-effect waves-light blue-grey">
              <i className="material-icons">thumb_up</i>
              <span>77</span>
            </button>,
            <button className="btn waves-effect waves-light blue-grey">
              <i className="material-icons">thumb_down</i>
              <span>19</span>
            </button>,
            <a
              className="right blue-grey-text"
              href="http://www.tutorialspoint.com"
            >
              Read more...
            </a>,
          ]}
        >
          <i>Tags: </i>
          <Chip>dragon training</Chip>
          <p className="ratings">
            <i className="material-icons icon-orange">star</i>
            <i className="material-icons icon-orange">star</i>
            <i className="material-icons icon-orange">star</i>
            <i className="material-icons icon-orange">star</i>
            <i className="material-icons icon-orange">star_half</i>
            <div className="stat">4.6</div>
          </p>
          <p>
            <i className="about">Wanna know how not to get devoured?</i>
          </p>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud...
          </p>
          <hr />
          <div className="writtenby">By James Pink 01/08/2018 08:12am</div>
        </Card>
      </Col>
      <Button
        floating
        large
        className="green add-article"
        waves="light"
        icon="add"
      />
    </Col>
  </Row>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;

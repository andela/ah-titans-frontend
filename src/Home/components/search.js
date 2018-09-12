import React from 'react';
import { Col, Row, Icon, Button, Dropdown, NavItem } from 'react-materialize';
import './index.scss';

const SearchComponent = () => (
  <Row className="home">
    <Col s={12} m={10}>
      <div className="search-bar">
        <Dropdown
          trigger={
            <Button>
              Filter By
              <i className="material-icons right">filter_list</i>
            </Button>
          }
        >
          <NavItem>Tags</NavItem>
          <NavItem>Author</NavItem>
          <NavItem>Title</NavItem>
        </Dropdown>
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
);

export default SearchComponent;

import React from 'react';
import {
  Card,
  Col,
  Row,
  Icon,
  Button,
  Chip,
  Dropdown,
  NavItem,
} from 'react-materialize';
import './index.scss';

const ArticlesForm = ({ article, success }) => (
  <Row className="home">
    <Col s={12} m={5}>
      <Card
        className="grey lighten-4"
        textClassName="black-text"
        title={article.title}
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
        <Chip>dragon training</Chip>
        <p className="ratings">
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star_half</i>
          4.6
        </p>
        <p>
          <i className="about">{article.description}</i>
        </p>
        <br />
        <p> {article.body}</p>
        <br />
        <div className="writtenby">
          By: {article.author.username}{' '}
          <a href="url" className="follow">
            Follow
          </a>
          {article.created_at}
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

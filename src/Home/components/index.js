import React from 'react';
import moment from 'moment';
import { Card, Col, Row, Chip, Icon } from 'react-materialize';
import './index.scss';

const ArticlesForm = ({ article }) => (
  <Row className="home">
    <Col s={12} m={5}>
      <Card
        key={article.slug}
        className="grey lighten-4"
        textClassName="black-text"
        title={article.title}
        actions={[
          <button className="btn waves-effect waves-light blue-grey">
            <i className="material-icons">share</i>
          </button>,
          <button className="btn waves-effect waves-light blue-grey">
            <i className="material-icons">thumb_up</i>
            <span>{article.likes_count}</span>
          </button>,
          <button className="btn waves-effect waves-light blue-grey">
            <i className="material-icons">thumb_down</i>
            <span>{article.dislikes_count}</span>
          </button>,
          <a
            className="right blue-grey-text"
            href="http://www.tutorialspoint.com"
          >
            Read more...
          </a>,
        ]}
      >
        {article.tagList.map(tag => {
          return <Chip>{tag}</Chip>;
        })}

        <p className="ratings">
          <Icon blue>star</Icon>
          <i className="material-icons">star</i>
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star</i>
          <i className="material-icons icon-orange">star_half</i>
          <i style={{ alignContent: 'center', position: 'inline' }}>(4.6)</i>
          <i className="material-icons icon-blue right">
            {article.favorited ? 'favorite' : 'favorite_border'}
          </i>
        </p>

        <p />
        <p className="about">{article.description}</p>
        <br />
        <p> {article.body}</p>
        <br />
        <div className="writtenby left">
          By: {article.author.username}{' '}
          <a href="url" className="follow">
            Follow
          </a>
          {moment(article.created_at).format('MMM Do YYYY, h:mm:ss a')}
        </div>
      </Card>
    </Col>
  </Row>
);

ArticlesForm.propTypes = {};

export default ArticlesForm;

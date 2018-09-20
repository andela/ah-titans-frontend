import React from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Input,
} from 'react-materialize';
import PropTypes from 'prop-types';
import './NewArticle.scss';

const NewArticle = ({
  onClick, onChange, errors, isFetching,
}) => (
  <div>
    <Row>
      <Col s={8} offset="s2">
        <Card className="black-text" title="Create Article">
          <Row>
            <Input s={12} label="Title:" onChange={onChange} name="title" id="title" />
            <div className="error">{errors ? errors.title : ''}</div>
            <Input s={12} label="Description:" onChange={onChange} name="description" />
            <div className="error">{errors ? errors.description : ''}</div>
            <Input s={12} type="textarea" label="Body:" onChange={onChange} name="body" />
            <div className="error">{errors ? errors.body : ''}</div>
            <Col s={2}>
              <Button className="blue" onClick={onClick} waves="light" disabled={isFetching}>
                {
                  isFetching ? 'Publishing...' : 'PUBLISH'
                }
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

NewArticle.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    error: PropTypes.array,
    title: PropTypes.array,
    description: PropTypes.array,
    body: PropTypes.array,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default NewArticle;

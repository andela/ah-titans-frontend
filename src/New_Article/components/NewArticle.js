import React from 'react';
import {
  Button,
  Card,
  Row,
  Col,
  Input,
} from 'react-materialize';
import PropTypes from 'prop-types';

const NewArticle = ({
  onClick, onChange,
}) => (
  <div style={{ marginTop: '5%', }}>
    <Row>
      <Col s={8} offset="s2">
        <Card className="black-text" title="Create Article">
          <Row>
            <Input s={12} label="Title:" onChange={onChange} />
            <Input s={12} label="Description:" onChange={onChange} />
            <Input s={12} type="textarea" label="Body:" onChange={onChange} />
            <Col s={2}>
              <Button className="blue" onClick={onClick} waves="light">
                SAVE
              </Button>
            </Col>
            {/* <Col s={2}>
              <Button className="red" waves="light">
                RESET
              </Button>
            </Col> */}
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
);

NewArticle.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default NewArticle;

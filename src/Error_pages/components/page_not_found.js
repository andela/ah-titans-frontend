import React, { Fragment } from 'react';
import { Card, CardTitle, Row } from 'react-materialize';
import Img from '../../assets/404.jpeg';

const NotFound = () => {
  return (
    <Fragment>
      <Row>
        <Card m={6}
          className="center"
          actions={[<a href="/">Take me home!</a>]}
        >
        <img src={Img}></img>
        </Card>
      </Row>
    </Fragment>
  );
};

export default NotFound;

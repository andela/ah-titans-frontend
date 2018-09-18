import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const CreateArticleButton = () => (
  <Link to="/article">
    <Button
      floating
      large
      className="green"
      fab="vertical"
      tooltip="Create article"
      waves="light"
      icon="add"
    />
  </Link>
);

export default CreateArticleButton;

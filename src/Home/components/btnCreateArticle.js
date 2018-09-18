import React from 'react';
import { Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const CreateArticleButton = () => (
  <Link to="/article">
    <Button
      onClick={handleEdit}
      floating
      large
      className="green"
      fab="vertical"
      tooltip="Edit article"
      waves="light"
      icon="edit"
    />
  </Link>
);

export default CreateArticleButton;

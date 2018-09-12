import React from 'react';
import { Button } from 'react-materialize';
import './index.scss';

const ButtonCreateArticle = () => (
  <Button
    floating
    large
    className="green add-article z-depth-0"
    waves="light"
    icon="add"
  />
);

export default ButtonCreateArticle;

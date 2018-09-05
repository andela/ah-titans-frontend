import React from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import createArticles from '../../actions/createArticlesAction';
import NewArticle from '../components';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, description, body, } = this.state;

    const article = {
      user: {
        title,
        description,
        body,
      },
    };
  }

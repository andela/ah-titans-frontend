import React from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import createArticles from '../../actions/createArticlesAction';
import NewArticle from '../components/NewArticle';

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

    this.props.createArticles(article);
  }

  render() {
    const { Article, } = this.props;

    return (
      <NewArticle
        onChange={this.handleChange}
        onClick={this.handleSubmit}
      />
    );
  }
}

Articles.propTypes = {
  createArticles: PropTypes.func.isRequired,
  Article: PropTypes.shape({
    article: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = ({ Article, }) => ({
  Article,
});

export default connect(mapStateToProps, { createArticles, })(Articles);

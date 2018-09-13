import React from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import createArticle from '../../actions/createArticlesAction';
import NewArticle from '../components/NewArticle';

class Article extends React.Component {
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
      article: {
        title,
        description,
        body,
      },
    };

    this.props.createArticle(article, this.props.history);
  }

  render() {
    const { article, } = this.props;
    const { errors, isFetching, } = article;
    console.log(errors);

    return (
      <NewArticle
        onChange={this.handleChange}
        onClick={this.handleSubmit}
        errors={errors}
        isFetching={isFetching}
      />
    );
  }
}

Article.propTypes = {
  createArticle: PropTypes.func.isRequired,
  article: PropTypes.shape({
    article: PropTypes.object,
    errors: PropTypes.object,
    isFetching: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ article, }) => ({
  article,
});

export default connect(mapStateToProps, { createArticle, })(Article);

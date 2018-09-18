import React, { Component, } from 'react';
import SnackBar from 'react-material-snackbar';
import { connect, } from 'react-redux';
import { Row, } from 'react-materialize';

import '../components/index.scss';
import ArticlesForm from '../components';
import SearchComponent from '../components/search';
import Loader from '../../Loader/components/index';
import getArticles from '../../actions/viewArticles';
import CreateArticleButton from '../components/btnCreateArticle';
import { bindActionCreators } from 'redux';

export class Home extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { new_user, } = this.props.home;
    const { isFetching, success, } = this.props.articles;
    const articles = this.props.articles.items.results;
    const article = [];
    const token = localStorage.getItem('token');

    if (success === true) {
      articles.map(article_ => article.push(<ArticlesForm article={article_} key={article.slug} />));
    }

    return (
      <div className="app">
        {new_user ? (
          <SnackBar show timer={6000} className="home">
            You have successfully signed up to Authors Haven!! Please check your email to verify
            your account
          </SnackBar>
        ) : (
          ''
        )}

        {isFetching && <Loader />}
        <SearchComponent />
        <Row class="home">
          {' '}
          {article}
        </Row>
        {
          token ? ( <CreateArticleButton />
            ) : ('')}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  home: state.exampleReducer,
  articles: state.viewArticles,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch);
export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Home);

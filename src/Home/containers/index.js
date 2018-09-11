import React, { Component, } from 'react';
import SnackBar from 'react-material-snackbar';
import { connect, } from 'react-redux';
import '../components/index.scss';
import ArticlesForm from '../components';
import Loader from '../../Loader/components/index';
import getArticles from '../../actions/viewArticles';

class Home extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    console.log(this.props.articles.items.results);
    const { new_user, } = this.props.home;
    const { articles, isFetching, } = this.props.articles;
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
        {/* ifEmpty(){
          {articles.length===0? 'No articles to display': <ArticlesForm articles={articles} />}
        } */}
        {isFetching ? <Loader /> : <ArticlesForm articles={articles} />}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  home: state.exampleReducer,
  articles: state.viewArticles,
});
export default connect(
  mapStatetoProps,
  { getArticles, }
)(Home);

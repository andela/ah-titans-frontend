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
    const { new_user, } = this.props.home;
    const { articles, isFetching, success, } = this.props.articles;
    console.log(success ? this.props.articles.items.results[0].slug : '');
    // console.log(this.props.articles.items.results);
    const art = this.props.articles.items.results;
    // art.map((article) => {
    //   console.log(article);
    // });
    if (success === true) {
      art.map((article) => {
        <div key={article.id}>
          <h1>{article.slug}</h1>
        </div>;
      });
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

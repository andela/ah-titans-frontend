import { VIEW_ARTICLES, VIEW_ARTICLES_ERROR, GETTING_ARTICLES } from './types';
import call from '../utils/service';

export const gettingArticlesActionCreator = () => ({
  type: GETTING_ARTICLES,
});

export const getArticlesActionCreator = articles => ({
  type: VIEW_ARTICLES,
  payload: articles,
});

export const getArticlesErrorActionCreator = error => ({
  type: VIEW_ARTICLES_ERROR,
  payload: error,
});

const getArticles = () => dispatch => {
  dispatch(gettingArticlesActionCreator());
  call({
    endpoint: '/articles/',
    method: 'GET',
  })
    .then(articles => {
      dispatch(getArticlesActionCreator(articles));
    })
    .catch(error => dispatch(getArticlesErrorActionCreator(error)));
};

export default getArticles;

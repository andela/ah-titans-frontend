import { VIEW_ARTICLES, VIEW_ARTICLES_ERROR, GETTING_ARTICLES, } from './types';

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

const fetchArticles = () => fetch('https://ah-titans-api.herokuapp.com/api/articles/').then(handleResponse);

const handleResponse = response => response.text().then((text) => {
  const data = text && JSON.parse(text);
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

const getArticles = () => (dispatch) => {
  dispatch(gettingArticlesActionCreator());
  fetchArticles()
    .then((articles) => {
      dispatch(getArticlesActionCreator(articles));
    })
    .catch(error => dispatch(getArticlesErrorActionCreator(error)));
};

export default getArticles;

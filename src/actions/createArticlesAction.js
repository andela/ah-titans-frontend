import PropTypes from 'prop-types';
import {
  NEW_ARTICLE,
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_ERROR,
} from './types';

export const createArticleRequest = () => ({
  type: NEW_ARTICLE_REQUEST,
});

export const createArticleActionCreator = data => ({
  type: NEW_ARTICLE,
  payload: data,
});

export const createArticleError = data => ({
  type: NEW_ARTICLE_ERROR,
  payload: data,
});

const handleResponse = response => response.json().then((data) => {
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

const token = localStorage.getItem('token');
const create = data => fetch('https://ah-titans-api.herokuapp.com/api/articles/', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Token ' + token,
  },
  body: JSON.stringify(data),
})
  .then(res => handleResponse(res));

const createArticle = (articleData, history) => (dispatch) => {
  dispatch(createArticleRequest());
  create(articleData)
    .then((data) => {
      dispatch(
        createArticleActionCreator(data)
      );
      history.push('/');
    })
    .catch(error => dispatch(createArticleError(error)));
};

createArticle.propTypes = {
  createArticleActionCreator: PropTypes.func.isRequired,
  createArticleError: PropTypes.func.isRequired,
};

export default createArticle;

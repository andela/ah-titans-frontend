import { NEW_ARTICLE, } from './types';

export const createArticlesActionCreator = data => ({
  type: NEW_ARTICLE,
  payload: data,
});

const createArticles = articleData => (dispatch) => {
  fetch('https://ah-titans-api.herokuapp.com/api/articles/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',

    },
    body: JSON.stringify(articleData),
  }).then(res => res.json())
    .then(data => dispatch(
      createArticlesActionCreator(data)
    ));
};

export default createArticles;

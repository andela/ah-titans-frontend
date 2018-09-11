import { FETCHING_ARTICLES, VIEW_ARTICLES_ERROR, VIEW_ALL_ARTICLES, } from './types';

export const fetchingArticles = () => ({ type: FETCHING_ARTICLES, });

export const createUserActionCreator = data => ({
  type: VIEW_ALL_ARTICLES,
  payload: data,
});

export const createUserErrorActionCreator = error => ({
  type: VIEW_ARTICLES_ERROR,
  payload: error,
});

const handleResponse = response => response.text().then((text) => {
  const data = text && JSON.parse(text);
  if (!response.ok) {
    return Promise.reject(data);
  }
  return data;
});

const signup = data => fetch('https://ah-titans-api.herokuapp.com/api/articles/', {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(handleResponse);

const createUser = (userData, history) => (dispatch) => {
  dispatch(fetchingArticles());
  signup(userData)
    .then((data) => {
      dispatch(createUserActionCreator(data));
      localStorage.setItem('user', data);
      history.push('/');
    })
    .catch(error => dispatch(createUserErrorActionCreator(error)));
};

export default createUser;

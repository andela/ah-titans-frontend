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

const create = data => fetch('https://ah-titans-api.herokuapp.com/api/articles/', {
<<<<<<< HEAD
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Authorization': 'Token ' + localStorage.getItem('token'),
  },
  body: JSON.stringify(data),
=======
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		Authorization: `Token ${localStorage.getItem('token')}`,
	},
	body: JSON.stringify(data),
>>>>>>> [Chore #160532247] fix bug
})
	.then(res => handleResponse(res));

const createArticle = (articleData, history) => (dispatch) => {
<<<<<<< HEAD
  dispatch(createArticleRequest());
  create(articleData)
    .then((data) => {
      dispatch(
        createArticleActionCreator(data),
      );
      history.push(`/article/${data.articles.slug}`);
    })
    .catch(error => dispatch(createArticleError(error)));
=======
	dispatch(createArticleRequest());
	create(articleData)
		.then((data) => {
			dispatch(
				createArticleActionCreator(data),
			);
			history.push('/');
		})
		.catch(error => dispatch(createArticleError(error)));
>>>>>>> [Chore #160532247] fix bug
};

export default createArticle;

import { VIEW_ARTICLES, VIEW_ARTICLES_ERROR, GETTING_ARTICLES } from './types';
import http from '../utils/http.service';
import config from '../config';

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

const getArticles = () => (dispatch) => {
	dispatch(gettingArticlesActionCreator());
	http.get(`${config.BASE_URL}/articles/`)
		.then((payload) => {
			const { ...data } = payload.data;
			dispatch(getArticlesActionCreator(data));
		})
		.catch((error) => {
			const { response: { data } } = error;
			dispatch(getArticlesErrorActionCreator(data));
		});
};

export default getArticles;

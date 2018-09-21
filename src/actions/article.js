import { VIEW_ARTICLE, GET_ARTICLE_ERROR, GETTING_ARTICLE } from './types';
import http from '../utils/http.service';
import config from '../config';

export const getArticleActionCreator = () => ({
	type: GETTING_ARTICLE,
});

export const viewArticleActionCreator = article => ({
	type: VIEW_ARTICLE,
	payload: article,
});

export const getArticleErrorActionCreator = error => ({
	type: GET_ARTICLE_ERROR,
	payload: error,
});

const fetchArticle = slug => (dispatch) => {
	dispatch(getArticleActionCreator());
	http.get(`${config.BASE_URL}/articles/${slug}`)
		.then((article) => {
			dispatch(viewArticleActionCreator(article));
		})
		.catch(error => dispatch(getArticleErrorActionCreator(error)),);
};

export default fetchArticle;

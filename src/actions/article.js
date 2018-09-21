import { VIEW_ARTICLE, GET_ARTICLE_ERROR, GETTING_ARTICLE } from './types';
import call from '../utils/service';

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
	call({ endpoint: `/articles/${slug}`, method: 'GET' },)
		.then((article) => {
			dispatch(viewArticleActionCreator(article));
		})
		.catch(error => dispatch(getArticleErrorActionCreator(error)),);
};

export default fetchArticle;

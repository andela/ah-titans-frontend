import { VIEW_ARTICLE, GET_ARTICLE_ERROR, GETTING_ARTICLE } from '../actions/types';

const prevState = {
	items: {},
	error: {},
	isFetching: false,
	success: false,
};

const getArticle = (state = prevState, action) => {
	switch (
		action.type
	) {
		case GETTING_ARTICLE:
			return { ...state, isFetching: true, success: false};
		case VIEW_ARTICLE:
			return { ...state, isFetching: false, success: true, items: action.payload.articles};
		case GET_ARTICLE_ERROR:
			return { ...state, error: action.payload.errors, isFetching: false, success: false};
		default:
			return state;
	}
};

export default getArticle;

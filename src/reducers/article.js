import { VIEW_ARTICLES, VIEW_ARTICLES_ERROR, GETTING_ARTICLES } from '../actions/types';

const prevState = {
	item: {},
	error: {},
	isFetching: false,
	success: false,
};

const getArticle = (state = prevState, action) => {
	switch (
		action.type
	) {
		case GETTING_ARTICLES:
			return {
				...state,
				isFetching: true,
				success: false,
			};
		case VIEW_ARTICLES:
			return {
				...state,
				isFetching: false,
				success: true,
				item:
					action
						.payload
						.articles,
			};
		case VIEW_ARTICLES_ERROR:
			return {
				...state,
				error:
					action
						.payload
						.errors,
				isFetching: false,
				success: false,
			};
		default:
			return state;
	}
};

export default getArticle;

import { LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR } from '../actions/types';

const prevState = {
	items: {},
	error: {},
};

const likeDislikeArticles = (state = prevState, action) => {
	switch (
		action.type
	) {
		case LIKE_ARTICLE:
			return {
				...state,
				items:
					action
						.payload
						.articles
						.likes,
			};
		case DISLIKE_ARTICLE:
			return {
				...state,
				items:
					action
						.payload
						.articles
						.dislike,
			};
		case LIKE_DISLIKE_ERROR:
			return {
				...state,
				error:
					action
						.payload
						.errors,
			};
		default:
			return state;
	}
};

export default likeDislikeArticles;

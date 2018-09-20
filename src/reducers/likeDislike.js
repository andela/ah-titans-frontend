import {
	LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR,
} from '../actions/types';

const prevState = {
	error: {},
	isLiking: false,
	isDisliking: false,
};

const likeDislikeArticles = (state = prevState, action) => {
	switch (action.type) {
		case LIKE_ARTICLE:
			return { ...state, isLiking: true };
		case DISLIKE_ARTICLE:
			return { ...state, isDisliking: true };
		case LIKE_DISLIKE_ERROR:
			return {
				...state,
				error:
          action.payload.article.detail,
			};
		default:
			return state;
	}
};

export default likeDislikeArticles;

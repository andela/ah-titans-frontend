import { USER_RATE_ARTICLE, RATING_ERROR } from '../actions/types';

const prevState = {
	error: {},
	rate: {},
};

const ratingArticles = (state = prevState, action) => {
	switch (
	action.type
	) {
		case USER_RATE_ARTICLE:
			return {
				...state,
				rate: action.payload.article.average_rating,
				
			};
		case RATING_ERROR:
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

export default ratingArticles;

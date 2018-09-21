import { USER_RATE_ARTICLE, RATING_ERROR } from './types';
import http from '../utils/http.service';
import config from '../config';

export const rateAction = () => ({
	type: USER_RATE_ARTICLE,
});

export const ratingErrorActionCreator = error => ({
	type: RATING_ERROR,
	payload: error,
});

export const sucessfullRating = (slug, rateData) => (dispatch) => {
	http.post(`${config.BASE_URL}/articles/${slug}/rate/`, { rateData })
		.then(
			(data) => {
				dispatch(
					rateAction(
						data,
					),
				);
			},
		)
		.catch(
			error => dispatch(
				ratingErrorActionCreator(
					error,
				),
			),
		);
};

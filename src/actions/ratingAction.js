import { USER_RATE_ARTICLE, RATING_ERROR } from './types';
import call from '../utils/service';

export const rateAction = () => ({
	type: USER_RATE_ARTICLE,
});

export const ratingErrorActionCreator = error => ({
	type: RATING_ERROR,
	payload: error,
});

export const sucessfullRating = (slug, rateData) => (dispatch) => {
	call(
		{
			endpoint: `/articles/${slug}/rate/`,
			method:
                'POST',
			data: rateData
		},
	)
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

import { USER_RATE_ARTICLE, RATING_ERROR } from './types';
import call from '../utils/service';

export const rateAction = () => ({
	type: USER_RATE_ARTICLE,
});

export const ratingErrorActionCreator = error => ({
	type: RATING_ERROR,
	payload: error,
});

export const sucessfullRating = slug => (dispatch) => {
	call(
		{
			endpoint: `/articles/${slug}/`,
			method:
                'POST',
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

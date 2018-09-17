import { LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR } from './types';
import call from '../utils/service';

export const likeArticleActionCreator = () => ({
	type: LIKE_ARTICLE,
});

export const dislikeArticleActionCreator = () => ({
	type: DISLIKE_ARTICLE,
});

export const likeDislikeErrorActionCreator = error => ({
	type: LIKE_DISLIKE_ERROR,
	payload: error,
});

const likeDislikeArticle = () => (dispatch) => {
	call(
		{
			endpoint:
				'/articles/<slug>/',
			method:
				'PUT',
		},
	)
		.then(
			(data) => {
				dispatch(
					likeArticleActionCreator(
						data,
					),
				);
			},
		)
		.catch(
			error => dispatch(
				likeDislikeErrorActionCreator(
					error,
				),
			),
		);
};

export default likeDislikeArticle;

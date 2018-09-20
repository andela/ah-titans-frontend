import {
	LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR, VIEW_ARTICLE,
} from './types';
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

export const likeDislikeArticleSuccess = article => ({
	type: VIEW_ARTICLE,
  payload: article,
});

export const likeArticle = slug => (dispatch) => {
	call({
			endpoint: `/articles/${slug}/like/`,
			method: 'PUT',
		})
		.then((data) => {dispatch(likeArticleActionCreator(data));
        dispatch(likeDislikeArticleSuccess(data));
			})
		.catch(error => dispatch(likeDislikeErrorActionCreator(error)));
};

export const dislikeArticle = slug => (dispatch) => {
	call({
		endpoint: `/articles/${slug}/dislike/`,
		method: 'PUT',
		})
		.then((data) => {dispatch(dislikeArticleActionCreator(data));
        dispatch(likeDislikeArticleSuccess(data));
			})
		.catch(error => dispatch(likeDislikeErrorActionCreator(error)));
};

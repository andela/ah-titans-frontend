import http from '../utils/http.service';
import config from '../config';
import {
	LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR, VIEW_ARTICLE,
} from './types';

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
	http.put(`${config.BASE_URL}/articles/${slug}/like/`)
		.then((data) => { dispatch(likeArticleActionCreator(data.data));
        dispatch(likeDislikeArticleSuccess(data.data));
			})
		.catch(error => dispatch(likeDislikeErrorActionCreator(error)));
};

export const dislikeArticle = slug => (dispatch) => {
		http.put(`${config.BASE_URL}/articles/${slug}/dislike/`)
		.then((data) => { dispatch(dislikeArticleActionCreator(data.data));
        dispatch(likeDislikeArticleSuccess(data.data));
			})
		.catch(error => dispatch(likeDislikeErrorActionCreator(error)));
};

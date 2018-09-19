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

export const likeArticle = slug => (dispatch) => {
  call(
    {
      endpoint: `/articles/${slug}/like`,
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
export const dislikeArticle = (slug) => (dispatch) => {
  call(
    {
      endpoint: `/articles/${slug}/dislike`,
      method:
        'PUT',
    },
  )
    .then(
      (data) => {
        dispatch(
          dislikeArticleActionCreator(
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

import {
  NEW_ARTICLE,
  NEW_ARTICLE_REQUEST,
  NEW_ARTICLE_ERROR,
} from '../actions/types';

const initialState = {
  article: {},
  errors: {},
  isFetching: false,
};

export default function createArticleReducer(state = initialState, action) {
  switch (action.type) {
  case NEW_ARTICLE_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case NEW_ARTICLE:
    return {
      ...state,
      isFetching: false,
      article: action.payload.article,
    };
  case NEW_ARTICLE_ERROR:
    return {
      ...state,
      isFetching: false,
      errors: action.payload.article.errors,
    };

  default:
    return state;
  }
}

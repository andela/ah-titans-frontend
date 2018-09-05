import { NEW_ARTICLE, } from '../actions/types';

const initialState = {
  article: {},
};

export default function createArticleReducer(state = initialState, action) {
  switch (action.type) {
  case NEW_ARTICLE:
    return {
      ...state,
      article: action.payload,
    };

  default:
    return state;
  }
}

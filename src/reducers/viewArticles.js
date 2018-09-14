import { GETTING_ARTICLES, VIEW_ARTICLES, VIEW_ARTICLES_ERROR, } from '../actions/types';

const prevState = {
  items: {},
  error: {},
  isFetching: false,
  success: false,
};

const viewArticles = (state = prevState, action) => {
  switch (action.type) {
  case GETTING_ARTICLES:
    return { ...state, isFetching: true, success: false, };
  case VIEW_ARTICLES:
    return {
      ...state,
      isFetching: false,
      success: true,
      items: action.payload.articles,
    };
  case VIEW_ARTICLES_ERROR:
    return {
      ...state, error: action.payload.errors, isFetching: false, success: false,
    };
  default:
    return state;
  }
};

export default viewArticles;

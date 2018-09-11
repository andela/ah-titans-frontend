<<<<<<< HEAD
import {
  GETTING_ARTICLES,
  VIEW_ARTICLES,
  VIEW_ARTICLES_ERROR,
} from '../actions/types';

const prevState = {
  items: {},
  error: {},
  isFetching: false,
};

const viewArticles = (state = prevState, action) => {
  switch (action.type) {
    case GETTING_ARTICLES:
      return { ...state, isFetching: true };
    case VIEW_ARTICLES:
      return {
        ...state,
        isFetching: false,
        item: action.payload.articles,
      };
    case VIEW_ARTICLES_ERROR:
      return { ...state, error: action.payload.errors, isFetching: false };
    default:
      return state;
  }
};

export default viewArticles;
=======
import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST, } from '../actions/types';

const prevState = {
  item: {},
  error: {},
  isFetching: false,
};
const signupReducer = (state = prevState, action) => {
  switch (action.type) {
  case SIGNUP_REQUEST:
    return { ...state, isFetching: true, };
  case CREATE_USER:
    return {
      ...state,
      isFetching: false,
      item: action.payload.user,
    };
  case CREATE_USER_ERROR:
    return { ...state, error: action.payload.errors, isFetching: false, };
  default:
    return state;
  }
};

export default signupReducer;
>>>>>>> d934da74b5afea2496367d7c50aeb352393013e9

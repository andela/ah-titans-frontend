<<<<<<< Updated upstream
import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST, } from '../actions/types';
=======
import { CREATE_USER, CREATE_USER_ERROR } from '../actions/types';
>>>>>>> Stashed changes

const prevState = {
  item: {},
  error: {},
  isFetching: false,
};
const signupReducer = (state = prevState, action) => {
  switch (action.type) {
<<<<<<< Updated upstream
  case SIGNUP_REQUEST:
    return { ...state, isFetching: true, };
  case CREATE_USER:
    if (action.payload.errors) {
=======
    case CREATE_USER:
      if (action.payload.errors) {
        return {
          ...state,
          isFetching: false,
          error: action.payload.errors,
        };
      }
>>>>>>> Stashed changes
      return {
        ...state,
        isFetching: false,
        item: action.payload.user,
      };
<<<<<<< Updated upstream
    }
    return {
      ...state,
      isFetching: false,
      item: action.payload.user,
    };
  case CREATE_USER_ERROR:
    return { ...state, error: action.payload.error, isFetching: false, };
=======
    case CREATE_USER_ERROR:
      return { ...state, error: action.payload.error };
>>>>>>> Stashed changes

    default:
      return state;
  }
};

export default signupReducer;

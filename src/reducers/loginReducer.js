import { LOGIN_SUCCESS, LOGIN_ERROR, } from '../actions/types';

const initialState = {
  user: {},
  errors: {},
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      ...state,
      user: action.payload.user,
    };
  case LOGIN_ERROR:
    return {
      ...state,
      errors: action.payload.errors,
    };

  default:
    return state;
  }
}

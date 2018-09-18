import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST } from '../actions/types';

const initialState = {
  user: {},
  errors: {},
  isFetchingGoogle: false,
};

export default function googleReducer(state = initialState, action) {
  switch (action.type) {
  case GOOGLE_LOGIN_REQUEST:
    return {
      ...state,
      isFetchingGoogle: true,
    };
  case GOOGLE_LOGIN_SUCCESS:
    return {
      ...state,
      isFetchingGoogle: false,
      user: action.payload.user,
    };
  case GOOGLE_LOGIN_ERROR:
    return {
      ...state,
      isFetchingGoogle: false,
      errors: action.payload.errors,
    };

  default:
    return state;
  }
}

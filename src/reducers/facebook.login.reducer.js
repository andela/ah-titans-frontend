import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR, FACEBOOK_LOGIN_REQUEST } from '../actions/types';

const initialState = {
  user: {},
  errors: {},
  isFetchingFacebook: false,
};

export default function facebookReducer(state = initialState, action) {
  switch (action.type) {
  case FACEBOOK_LOGIN_REQUEST:
    return {
      ...state,
      isFetchingFacebook: true,
    };
  case FACEBOOK_LOGIN_SUCCESS:
    return {
      ...state,
      isFetchingFacebook: false,
      user: action.payload.user,
    };
  case FACEBOOK_LOGIN_ERROR:
    return {
      ...state,
      isFetchingFacebook: false,
      errors: action.payload.errors,
    };

  default:
    return state;
  }
}

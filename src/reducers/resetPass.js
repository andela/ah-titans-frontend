import { USER_RESET_PASS, } from '../actions/types';

export default function resetPass(state = {}, action = {}) {
  switch (action.type) {
  case USER_RESET_PASS:
    return action.user;
  default:
    return state;
  }
}

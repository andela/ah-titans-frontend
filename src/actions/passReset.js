import { USER_RESET_PASS, } from './types';
import api from '../api';

export const userResetPass = user => ({
  type: USER_RESET_PASS,
  user,
});


export const reset = credentials => dispatch => api.user.reset(credentials).then(user => dispatch(userResetPass(user)));

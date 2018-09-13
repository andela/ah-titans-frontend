import { USER_NEW_PASS } from './types';
import api from './api';

export const userNewPass = reset => ({
	type: USER_NEW_PASS,
	reset,
});


export const newpass = credentials => dispatch => api.pass.newpass(credentials).then(reset => dispatch(userNewPass(reset)));

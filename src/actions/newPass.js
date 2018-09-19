import { USER_NEW_PASS, PASS_RESET_TOKEN } from './types';
import api from './api';
import call from '../utils/service';

export const userNewPass = reset => ({
	type: USER_NEW_PASS,
	reset,
});

export const passResetToken = token => ({
	type: PASS_RESET_TOKEN,
	token,
});


export const checkURL = (uidb64, token, history) => (dispatch) => {
	call({
		endpoint: `/reset/${uidb64}/${token}/`,
		method: 'GET',
	}).then((res) => {
		if (res.msg) history.push('/NotFound');
		dispatch(passResetToken(res));
	});
};

export const newpass = credentials => dispatch => api.pass.newpass(credentials).then(reset => dispatch(userNewPass(reset)));

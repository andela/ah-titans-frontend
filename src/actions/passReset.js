import swal from 'sweetalert';
import { USER_RESET_PASS, USER_RESET_FAIL } from './types';
import api from './api';

export const userResetPass = user => ({
	type: USER_RESET_PASS,
	user,
});

export const userResetFail = () => ({
	type: USER_RESET_FAIL,
});

export const reset = (creds, history) => (dispatch) => {
	fetch('https://ah-titans-api.herokuapp.com/api/users/reset_pass/', {
		method: 'POST',
		body: JSON.stringify({ user: creds }),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((user) => {
			if (user.status === 200) {
				dispatch(userResetPass(user));
				swal('Success', 'Check your email inbox for password reset instructions!', 'success');
				history.push('/login');
			} else if (user.status === 404) {
				dispatch(userResetFail());
				swal('Error', 'This email does not exist', 'error');
			} else {
				swal('Error', 'Something went wrong', 'error');
			}
		});
};

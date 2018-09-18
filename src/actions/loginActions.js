import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from './types';
import http from '../utils/http.service';
import config from '../config';

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginUserSuccessful = data => ({
	type: LOGIN_SUCCESS,
	payload: data,
});

export const loginUserError = error => ({
	type: LOGIN_ERROR,
	payload: error,
});

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} user - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

const loginUser = ({ user }, history) => (dispatch) => {
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { user })
		.then((data) => {
			localStorage.setItem('token', data.data.user.token);
			localStorage.setItem('username', data.data.user.username);
			dispatch(loginUserSuccessful(data.data));
			history.push('/');
		})
		.catch((error) => {
			const { ...errorResponse } = error.response;
			dispatch(loginUserError(errorResponse.data));
		});
};

export default loginUser;

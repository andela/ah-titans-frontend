import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST } from './types';
import http from '../utils/http.service';
import config from '../config';


export const loginRequest = () => ({ type: GOOGLE_LOGIN_REQUEST });

export const loginUserSuccessful = data => ({
	type: GOOGLE_LOGIN_SUCCESS,
	payload: data,
});

export const loginUserError = data => ({
	type: GOOGLE_LOGIN_ERROR,
	payload: data,
});

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} requestBody - Contains the token given by the auth provider.
 * @access - Public for both registered and unregistered users.
 */

const googleLogin = (requestBody, history) => (dispatch) => {
	const data2 = requestBody.access_token;
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/auth/google-oauth2`, { access_token: data2 })
		.then((data) => {
			localStorage.setItem('token', data.data.user.token);
			dispatch(
				loginUserSuccessful(data.data.user.token),
			);
			history.push('/');
		})
		.catch(error => dispatch(loginUserError(error)));
};

export default googleLogin;

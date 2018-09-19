import PropTypes from 'prop-types';
import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_REQUEST } from './types';
import call from '../utils/service';

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
	dispatch(loginRequest());
	call({ endpoint: '/users/auth/google-oauth2', method: 'POST', data: requestBody })
		.then((data) => {
			localStorage.setItem('token', data.user.token);
			dispatch(
				loginUserSuccessful(data),
			);
			history.push('/');
		})
		.catch(error => dispatch(loginUserError(error)));
};

export default googleLogin;

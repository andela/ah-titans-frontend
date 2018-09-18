import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR, FACEBOOK_LOGIN_REQUEST } from './types';
import call from '../utils/service';

export const facebookLoginRequest = () => ({ type: FACEBOOK_LOGIN_REQUEST });

export const facebookLoginUserSuccessful = data => ({
	type: FACEBOOK_LOGIN_SUCCESS,
	payload: data,
});

export const facebookLoginUserError = data => ({
	type: FACEBOOK_LOGIN_ERROR,
	payload: data,
});

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} requestBody - Contains the token received from the auth provider.
 * @access - Public for both registered and unregistered users.
 */

const facebookLogin = (requestBody, history) => (dispatch) => {
	dispatch(facebookLoginRequest());
	call({ endpoint: '/users/auth/facebook', method: 'POST', data: requestBody })
		.then((data) => {
			localStorage.setItem('token', data.user.token);
			dispatch(
				facebookLoginUserSuccessful(data),
			);
			history.push('/');
		})
		.catch(error => dispatch(facebookLoginUserError(error)));
};
export default facebookLogin;

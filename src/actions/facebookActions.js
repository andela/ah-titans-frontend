import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_ERROR, FACEBOOK_LOGIN_REQUEST } from './types';
import http from '../utils/http.service';
import config from '../config';


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
	const data2 = requestBody.access_token;
	dispatch(facebookLoginRequest());
	http.post(`${config.BASE_URL}/users/auth/facebook`, { access_token: data2 })
		.then((data) => {
			console.log(data.data.user.token);
			localStorage.setItem('token', data.data.user.token);
			dispatch(
				facebookLoginUserSuccessful(data.data.user.token),
			);
			history.push('/');
		})
		.catch(error => dispatch(facebookLoginUserError(error)));
};
export default facebookLogin;

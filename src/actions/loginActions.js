import PropTypes from 'prop-types';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from './types';
import call from '../utils/service';

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginUserSuccessful = data => ({
	type: LOGIN_SUCCESS,
	payload: data,
});

export const loginUserError = data => ({
	type: LOGIN_ERROR,
	payload: data,
});

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} userData - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

const loginUser = (userData, history) => (dispatch) => {
	dispatch(loginRequest());
	call({ endpoint: '/users/login/', method: 'POST', data: userData })
		.then((data) => {
			localStorage.setItem('token', data.user.token);
			localStorage.setItem('username', data.user.username);
			dispatch(
				loginUserSuccessful(data),
			);
			history.push('/');
		})
		.catch(error => dispatch(loginUserError(error)));
};

loginUser.propTypes = {
	loginUserSuccessful: PropTypes.func.isRequired,
	loginUserError: PropTypes.func.isRequired,
};

export default loginUser;

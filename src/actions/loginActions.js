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

<<<<<<< HEAD
/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} user - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

const loginUser = ({ user, history }) => (dispatch) => {
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { user })
		.then((payload) => {
			const { response: { data } } = payload;
			dispatch(loginUserSuccessful(data));
			localStorage.setItem('token', payload.user.token);
			localStorage.setItem('username', payload.user.username);
			history.push('/');
		})
		.catch((error) => {
			const { response: { data } } = error;
			dispatch(loginUserError(data));
=======
const loginUser = ({ user }) => (dispatch) => {
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { user })
		.then((data) => {
			dispatch(loginUserSuccessful(data.response.data));
		})
		.catch((error) => {
			dispatch(loginUserError(error.response.data));
>>>>>>> [Chore #160532247] Fix error handling
		});
};

export default loginUser;

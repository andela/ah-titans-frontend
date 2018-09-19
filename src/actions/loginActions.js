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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> [Chore #160532247] Implement requested changes
/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} user - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

<<<<<<< HEAD
<<<<<<< HEAD
const loginUser = ({ user, history }) => (dispatch) => {
=======
const loginUser = ({ user }, history) => (dispatch) => {
>>>>>>> [Chore #160532247] fixed signin bug
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
=======
=======
>>>>>>> [Chore #160532247] Implement requested changes
const loginUser = ({ user, history }) => (dispatch) => {
>>>>>>> [Chore #160532247] Add routing after successful login and signup
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { user })
		.then((data) => {
			dispatch(loginUserSuccessful(data.data));
			localStorage.setItem('token', data.data.user.token);
			localStorage.setItem('username', data.data.user.username);
			history.push('/');
		})
		.catch((error) => {
<<<<<<< HEAD
<<<<<<< HEAD
			dispatch(loginUserError(error.response.data));
>>>>>>> [Chore #160532247] Fix error handling
=======
			const { ...errorResponse } = error.response;
			dispatch(loginUserError(errorResponse.data));
>>>>>>> [Chore #160532247] Implement requested changes
=======
			const { data } = error.response;
			dispatch(loginUserError(data));
>>>>>>> [Chore #160532247] fix bug
		});
};

export default loginUser;

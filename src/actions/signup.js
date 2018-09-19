import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST } from './types';
import http from '../utils/http.service';
import config from '../config';

export const signingUp = () => ({ type: SIGNUP_REQUEST });

export const createUserActionCreator = user => ({
	type: CREATE_USER,
	payload: user,
});

export const createUserErrorActionCreator = error => ({
	type: CREATE_USER_ERROR,
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
<<<<<<< HEAD
const createUser = ({ user, history }) => (dispatch) => {
=======
const createUser = ({ user }, history) => (dispatch) => {
>>>>>>> [Chore #160532247] fixed signin bug
	dispatch(signingUp());
	http.post(`${config.BASE_URL}/users/`, { user })
		.then((payload) => {
			const { response: { data } } = payload;
			dispatch(createUserActionCreator(data));
			history.push('/');
=======
const createUser = ({ user }) => (dispatch) => {
=======
=======

>>>>>>> [Chore #160532247] Implement requested changes
=======
>>>>>>> [Chore #160011178] return the decode token  file
const createUser = ({ user, history }) => (dispatch) => {
>>>>>>> [Chore #160532247] Add routing after successful login and signup
	dispatch(signingUp());
	http.post(`${config.BASE_URL}/users/`, { user })
		.then((data) => {
<<<<<<< HEAD
<<<<<<< HEAD
			dispatch(createUserActionCreator(data.response.data));
<<<<<<< HEAD
>>>>>>> [Chore #160532247] Fix error handling
=======
=======
			localStorage.setItem('token', data.data.user.token);
			localStorage.setItem('username', data.data.user.username);
=======
>>>>>>> [Chore #160532247] fix bug
			dispatch(createUserActionCreator(data.data));
>>>>>>> [Chore #160532247] fixed signin bug
			history.push('/');
>>>>>>> [Chore #160532247] Add routing after successful login and signup
		})
		.catch((error) => {
<<<<<<< HEAD
			const { response: { data } } = error;
			dispatch(createUserErrorActionCreator(data));
=======
			const { ...errorResponse } = error.response;
			dispatch(createUserErrorActionCreator(errorResponse.data));
>>>>>>> [Chore #160532247] Implement requested changes
		});
};

export default createUser;

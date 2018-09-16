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

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} user - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */


const createUser = ({ user, history }) => (dispatch) => {
	dispatch(signingUp());
	http.post(`${config.BASE_URL}/users/`, { user })
		.then((data) => {
			dispatch(createUserActionCreator(data.response.data));
			history.push('/');
		})
		.catch((error) => {
			const { ...errorResponse } = error.response;
			dispatch(createUserErrorActionCreator(errorResponse.data));
		});
};

export default createUser;

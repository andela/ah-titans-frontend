import { CREATE_USER, CREATE_USER_ERROR, SIGNUP_REQUEST } from './types';
import call from '../utils/service';

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
 * * @param {object} userData - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

const createUser = (userData, history) => (dispatch) => {
	dispatch(signingUp());
	call({ endpoint: '/users/', method: 'POST', data: userData })
		.then((data) => {
			dispatch(createUserActionCreator(data));
			localStorage.setItem('user', data);
			history.push('/');
		})
		.catch(error => dispatch(createUserErrorActionCreator(error)));
};

export default createUser;

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

const loginUser = (userData, history) => (dispatch) => {
  dispatch(loginRequest());
  call({ endpoint: '/users/login/', method: 'POST', data: userData, })
    .then((data) => {
      dispatch(
        loginUserSuccessful(data),
        localStorage.setItem('token', data.user.token),
        localStorage.setItem('username', data.user.username)
      );
      history.push('/');
    })
    .catch(error => dispatch(loginUserError(error)));
};

/**
 * Represents functionality for creating a user.
 * @constructor
 * @param {function} history - Handles routing to the next page.
 * * @param {object} user - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 */

export default loginUser;

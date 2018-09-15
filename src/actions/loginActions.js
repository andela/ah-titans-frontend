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

const loginUser = ({ user, history }) => (dispatch) => {
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { user })
		.then((data) => {
			dispatch(loginUserSuccessful(data.response.data));
			history.push('/');
		})
		.catch((error) => {
			dispatch(loginUserError(error.response.data));
		});
};

export default loginUser;

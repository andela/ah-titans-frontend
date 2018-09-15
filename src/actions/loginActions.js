import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from './types';
import http from '../utils/http.service';
import config from '../config';

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginUserSuccessful = data => ({
	type: LOGIN_SUCCESS,
	payload: data,
});

export const loginUserError = data => ({
	type: LOGIN_ERROR,
	payload: data,
});

const loginUser = userData => (dispatch) => {
	dispatch(loginRequest());
	http.post(`${config.BASE_URL}/users/login/`, { data: userData })
		.then((data) => {
			dispatch(loginUserSuccessful(data));
		})
		.catch((error) => { console.log(error); dispatch(loginUserError(error)); });
};

export default loginUser;

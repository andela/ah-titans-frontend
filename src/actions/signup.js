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

const createUser = userData => (dispatch) => {
	dispatch(signingUp());
	http.post(`${config.BASE_URL}/users/`, { data: userData })
		.then((data) => {
			dispatch(createUserActionCreator(data.response.data));
		})
		.catch((error) => {
			dispatch(createUserErrorActionCreator(error.response.data));
		});
};

export default createUser;

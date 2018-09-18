import {
	GET_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_ERROR,
	GET_PROFILE_ERROR, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST,
} from './types';
import call from '../utils/service';

export const getProfileRequest = () => ({
	type: GET_PROFILE_REQUEST,
});

export const getProfileSuccessfully = data => ({
	type: GET_PROFILE,
	payload: data,
});

export const getProfileError = data => ({
	type: GET_PROFILE_ERROR,
	payload: data,
});

export const updateProfileRequest = () => ({
	type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccessfully = data => ({
	type: UPDATE_PROFILE,
	payload: data,
});

export const updateProfileError = error => ({
	type: UPDATE_PROFILE_ERROR,
	payload: error,
});

export const getProfile = userName => (dispatch) => {
	dispatch(getProfileRequest());
	call({ endpoint: `/profiles/${userName}`, method: 'GET' })
		.then(data => dispatch(getProfileSuccessfully(data)))
		.catch(error => dispatch(getProfileError(error)));
};

export const updateProfile = userData => (dispatch) => {
	dispatch(updateProfileRequest());
	call({
		endpoint: '/user/', method: 'PUT', data: userData, authenticated: true,
	})
		.then(data => dispatch(updateProfileSuccessfully(data)))
		.catch(error => dispatch(updateProfileError(error)));
};

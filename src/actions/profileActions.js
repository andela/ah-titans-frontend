import {
	GET_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_ERROR,
	GET_PROFILE_ERROR, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, CLEAR_STORE,
} from './types';
import http from '../utils/http.service';
import config from '../config';

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
	success: true,
	payload: data,
});

export const updateProfileError = error => ({
	type: UPDATE_PROFILE_ERROR,
	payload: error,
});

export const clearStore = () => ({
	type: CLEAR_STORE,
});

/**
 * Represents functionality for getting a user profile.
 * * @param {object} userName - Contains the typed in user information.
 * @access - Public for both registered and unregistered users.
 * @returns - Object containing either user information or errors.
 */

export const getProfile = userName => (dispatch) => {
	dispatch(getProfileRequest());
	http.get(`${config.BASE_URL}/profiles/${userName}`)
		.then((data) => {
			dispatch(
				getProfileSuccessfully(data.data),
			);
		})
		.catch(error => dispatch(getProfileError(error)));
};

/**
 * Represents functionality for updating a user profile.
 *  @param {string} userData - Contains the typed in user information.
 * @access - Public for both registered users.
 * @return - Object containing the profile details.
 */


export const updateProfile = userData => (dispatch) => {
	dispatch(updateProfileRequest());
	http.put(`${config.BASE_URL}/user/`, userData)
		.then(({ data }) => {
			dispatch(updateProfileSuccessfully(data));
			setTimeout(() => {
				dispatch(clearStore());
			}, 1000);
		})
		.catch((error) => {
			const { response: { data } } = error;
			dispatch(updateProfileError(data));
			setTimeout(() => {
				dispatch(clearStore());
			}, 1000);
		});
};

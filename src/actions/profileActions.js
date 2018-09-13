import { GET_PROFILE, UPDATE_PROFILE } from './types';

const getProfileSuccessfully = data => ({
	type: GET_PROFILE,
	payload: data,
});

const updateProfileSuccessfully = data => ({
	type: UPDATE_PROFILE,
	payload: data,
});

const token = localStorage.getItem('token');

export const getProfile = () => (dispatch) => {
	fetch('http://ah-titans-api.herokuapp.com/api/user/', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: `Token ${token}`,
		},
	})
		.then(res => res.json())
		.then(data => dispatch(getProfileSuccessfully(data)));
};

export const updateProfile = userData => (dispatch) => {
	fetch('http://ah-titans-api.herokuapp.com/api/user/', {
		method: 'PUT',
		headers: {
			'content-type': 'application/json',
			Authorization: `Token ${token}`,
		},
		body: JSON.stringify(userData),
	})
		.then(res => res.json())
		.then(data => console.log(data));
};

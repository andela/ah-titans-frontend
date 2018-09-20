import configureStore from 'redux-mock-store';
import {
	getProfileSuccessfully, getProfileError, updateProfileSuccessfully, updateProfileError,
	getProfileRequest, updateProfileRequest, clearStore,
} from '../profileActions';
import * as types from '../types';

const mockStore = configureStore();
const store = mockStore();

describe('profile actions', () => {
	it('should create an action for get profile successfully', () => {
		const data = {};
		const expectedAction = {
			type: types.GET_PROFILE,
			payload: data,
		};
		store.dispatch(getProfileSuccessfully(data));
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for get profile error', () => {
		store.clearActions();
		const error = {};
		const expectedAction = {
			type: types.GET_PROFILE_ERROR,
			payload: error,
		};
		store.dispatch(getProfileError(error));
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for update profile successfully', () => {
		store.clearActions();
		const data = {};
		const expectedAction = {
			type: types.UPDATE_PROFILE,
			payload: data,
			success: true,
		};
		store.dispatch(updateProfileSuccessfully(data));
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for update profile error', () => {
		store.clearActions();
		const error = {};
		const expectedAction = {
			type: types.UPDATE_PROFILE_ERROR,
			payload: error,
		};
		store.dispatch(updateProfileError(error));
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for update profile request', () => {
		store.clearActions();
		const expectedAction = {
			type: types.UPDATE_PROFILE_REQUEST,
		};
		store.dispatch(updateProfileRequest());
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for get profile request', () => {
		store.clearActions();
		const expectedAction = {
			type: types.GET_PROFILE_REQUEST,
		};
		store.dispatch(getProfileRequest());
		expect(store.getActions()).toEqual([expectedAction]);
	});

	it('should create an action for clear store request', () => {
		store.clearActions();
		const expectedAction = {
			type: types.CLEAR_STORE,
		};
		store.dispatch(clearStore());
		expect(store.getActions()).toEqual([expectedAction]);
	});
});

describe('get profile request', () => {
	fetch.mockResponseOnce(JSON.stringify({}));
	fetch('http://ah-titans-api.herokuapp.com/api/profiles/ronnie/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => expect(res.body).toEqual(JSON.parse({})));
});

describe('update profile request', () => {
	fetch.mockResponseOnce(JSON.stringify({}));
	const user = {
		user: {
			username: '', bio: '', interests: '', image: '',
		},
	};
	fetch('http://ah-titans-api.herokuapp.com/api/user/', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then(res => expect(res.body).toEqual(JSON.parse({})));
});

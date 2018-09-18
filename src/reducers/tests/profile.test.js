import * as types from '../../actions/types';
import reducer from '../profileReducer';

describe(' Profile returns errors for invalid input', () => {
	it('returns errors', () => {});
});

describe('profile reducer', () => {
	const userData = {
		username: '',
		bio: '',
		interests: '',
	};
	const initialState = {
		user: { userData },
		errors: {},
		isFetching: false,
	};

	it('should return initital state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should set isFetching state to true for getting profile', () => {
		const startAction = {
			type: types.GET_PROFILE_REQUEST,
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			isFetching: true,
		});
	});

	it('should set isFetching state to true for updating profile', () => {
		const startAction = {
			type: types.UPDATE_PROFILE_REQUEST,
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			isFetching: true,
		});
	});

	it('should get user profile successfully', () => {
		const startAction = {
			type: types.GET_PROFILE,
			payload: {
				profiles:
				{ username: '', bio: '', interests: '' },
			},
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			isFetching: false,
			user: { username: '', bio: '', interests: '' },
		});
	});

	it('should update user profile successfully', () => {
		const startAction = {
			type: types.UPDATE_PROFILE,
			payload: {
				user:
				{ username: '', bio: '', interests: '' },
			},
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			isFetching: false,
			user: { username: '', bio: '', interests: '' },
		});
	});

	it('should return an error on get profile failure', () => {
		const startAction = {
			type: types.GET_PROFILE_ERROR,
			payload: {
				profile: {
					errors: {
						detail: 'some error',
					},
				},
			},
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			errors: 'some error',
		});
	});

	it('should return an error on get profile failure', () => {
		const startAction = {
			type: types.UPDATE_PROFILE_ERROR,
			payload: {
				errors: {
					detail: 'some error',
				},
			},
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			errors: { detail: 'some error' },
		});
	});
});

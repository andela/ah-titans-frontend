import { UPDATE_STATE } from '../../actions/types';
import reducer from '../updateState';

describe('update state reducer', () => {
	const initialState = {};
	const user = {
		id: 2,
		username: 'John Musiu',
		email: 'john.musiu@andela.com',
		profile_picture: '',
		is_verified: true,
		exp: 1539867520,
	};
	const action = { type: UPDATE_STATE, user: { ...user } };
	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should update state', () => {
		expect(reducer(initialState, action)).toEqual(user);
	});
});

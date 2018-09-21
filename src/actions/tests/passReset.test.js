import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { USER_RESET_PASS } from '../types';
import { userResetPass } from '../passReset';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('article actions', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it('should create an action to fetch article', () => {
		const expectedAction = {
			type: USER_RESET_PASS,
		};
		expect(userResetPass()).toEqual(expectedAction);
	});
});

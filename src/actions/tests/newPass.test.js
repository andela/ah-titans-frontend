import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { USER_NEW_PASS } from '../types';
import { userNewPass } from '../newPass';

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
			type: USER_NEW_PASS,
		};
		expect(userNewPass()).toEqual(expectedAction);
	});
});

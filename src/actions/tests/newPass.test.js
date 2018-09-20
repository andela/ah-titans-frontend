import fetchMock from 'fetch-mock';

import { USER_NEW_PASS } from '../types';
import { userNewPass } from '../newPass';

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

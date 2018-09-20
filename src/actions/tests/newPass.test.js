import fetchMock from 'fetch-mock';

import { USER_NEW_PASS, PASS_RESET_TOKEN } from '../types';
import { userNewPass, passResetToken } from '../newPass';


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
	it('should create an action to verify reset token', () => {
		const expectedAction = {
			type: PASS_RESET_TOKEN,
		};
		expect(passResetToken()).toEqual(expectedAction);
	});
});

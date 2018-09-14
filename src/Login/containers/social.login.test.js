import { shallow } from 'enzyme';
import React from 'react';
import Login from '.';
import store from '../../store';

import LoginForm from '../components';

describe('<Login />', () => {
	const wrapper = shallow(
		<LoginForm
			store={store}
			onClick={() => ''}
			onChange={() => ''}
			errors={{ error: [], email: [], password: [] }}
			isFetching
			history={{ push() {} }}
			googleResponse={() => ''}
			onFailure={() => ''}
		/>,
		beforeEach(() => {
			fetch.resetMocks();
		}),
	);
	it('Test google', () => {
		const accessToken = 'sihdfodhfionsdhioufhinoshd';
		fetch.mockResponseOnce(JSON.stringify({ user: {} }));
		fetch('https://ah-jn-api.herokuapp.com/api/users/auth/google-oauth2', {
			method: 'POST',
			body: JSON.stringify({ accessToken }),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			console.log(res);
			expect(res.body).toEqual(JSON.parse(accessToken));
		});
	});

	it('Test facebook login', () => {
		const accessToken = 'sihdfodhfionsdhioufhghjggvyvinoshd';
		fetch.mockResponseOnce(JSON.stringify({ user: {} }));
		fetch('https://ah-jn-api.herokuapp.com/api/users/auth/facebook', {
			method: 'POST',
			body: JSON.stringify({ accessToken }),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			console.log(res.body.user);
			expect(res.body).toEqual(JSON.parse(accessToken));
		});
	});
});

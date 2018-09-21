describe('testing api', () => {
	beforeEach(() => {
		fetch.resetMocks();
	});

	it('test login by google and return user', () => {
		const accessToken = 'sihdfodhfionsdhioufhinoshd';
		fetch.mockResponseOnce(JSON.stringify({ data: 'sjdhinofshdoinjfhsdfs' }));

		fetch('https://ah-jn-api.herokuapp.com/api/users/auth/google-oauth2', {
			method: 'POST',
			body: JSON.stringify({ accessToken }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				expect(res.body).toEqual('{"data":"sjdhinofshdoinjfhsdfs"}');
			});
	});
	it('call login by facebook and return user', () => {
		const accessToken = 'sihdfodhfionsdhioufhinoshd';
		fetch.mockResponseOnce(JSON.stringify({ data: 'facebooktoken' }));

		fetch('https://ah-jn-api.herokuapp.com/api/users/auth/facebook', {
			method: 'POST',
			body: JSON.stringify({ accessToken }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				expect(res.body).toEqual('{"data":"facebooktoken"}');
			});

		expect(fetch.mock.calls.length).toEqual(1);
	});
});
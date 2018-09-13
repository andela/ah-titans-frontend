export default {
	user: {
		reset: user => fetch('https://ah-titans-api.herokuapp.com/api/users/reset_pass/', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user }),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return Promise.reject(response);
			})
			.then(data => data.user),
	},
	pass: {
		newpass: user => fetch('https://ah-titans-api.herokuapp.com/api/users/pass_reset/', {
			method: 'put',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ user }),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return Promise.reject(response);
			})
			.then(data => data.msg),
	},
};

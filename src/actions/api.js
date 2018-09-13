import axios from 'axios';

export default {
	user: {
		reset: user => axios.post('https://ah-titans-api.herokuapp.com/api/users/reset_pass/', { user }).then(res => res.data.user),
	},
	pass: {
		newpass: user => axios.put('https://ah-titans-api.herokuapp.com/api/users/pass_reset/', { user }).then(res => res.data.msg),
	},
};

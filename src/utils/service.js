import axios from 'axios';
import config from '../config';
import authHeader from './auth_header';


export function logout() {
	// remove token from local storage to log user out
	localStorage.removeItem('token');
}


const call = ({
	endpoint, method, data,
}) => fetch(`${config.BASE_URL}${endpoint}`, {
	method,
	headers: {
		'content-type': 'application/json',
		...authHeader(),
	},
	body: JSON.stringify(data),
}).catch((error) => {
	if (error.response) {
		console.log(error.response.data);
		return error.response;
	}

	return error;
});

export default call;

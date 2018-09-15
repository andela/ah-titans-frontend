import axios from 'axios';
import config from '../config';
import authHeader from './auth_header';


export function logout() {
	// remove token from local storage to log user out
	localStorage.removeItem('token');
}


axios.defaults.headers.common.Authorization = authHeader();
const call = ({
	endpoint, method, data,
}) => axios(`${config.BASE_URL}${endpoint}`, {
	method,
	body: JSON.stringify(data),
}).catch((error) => {
	// Error
	if (error.response) {
		console.log(error.response.data);
		return error.response;
	}

	return error;
});

export default call;

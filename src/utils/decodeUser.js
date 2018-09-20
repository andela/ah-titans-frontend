import jwt_decode from 'jwt-decode';

const decodeUser = () => {
	const token = localStorage.getItem('token');
	const user = token ? jwt_decode(token) : {};
	return user;
};

export default decodeUser;

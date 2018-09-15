import * as jwtDecode from 'jwt-decode';

const decodeToken = () => {
	const token = localStorage.getItem('user');
	if (token.length === 2) {
		const jwtToken = token[1];
		const decodedToken = jwtDecode(jwtToken);
		const userInfo = decodedToken.UserInfo;
		return userInfo;
	}
	return 'unauthorised';
};

export default decodeToken;

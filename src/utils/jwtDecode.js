import * as jwtDecode from 'jwt-decode';

const decodeToken = () => {
	const token = localStorage.getItem('token');
	const token2 = token.split('');
	if (token2.length === 2) {
		const jwtToken = token2[1];
		const decodedToken = jwtDecode(jwtToken);
		const userInfo = decodedToken.UserInfo;
		return userInfo;
	}
	return 'unauthorised';
};

export default decodeToken;

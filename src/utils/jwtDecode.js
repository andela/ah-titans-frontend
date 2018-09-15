import * as jwtDecode from 'jwt-decode';

const decodeToken = () => {
<<<<<<< HEAD
	const token = localStorage.getItem('token').split('');
=======
	const token = localStorage.getItem('token');
>>>>>>> [Chore #160532247] Fix error handling
	if (token.length === 2) {
		const jwtToken = token[1];
		const decodedToken = jwtDecode(jwtToken);
		const userInfo = decodedToken.UserInfo;
		return userInfo;
	}
	return 'unauthorised';
};

export default decodeToken;

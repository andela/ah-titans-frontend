import * as jwtDecode from 'jwt-decode';

const decodeToken = () => {
<<<<<<< HEAD
<<<<<<< HEAD
	const token = localStorage.getItem('token').split('');
=======
	const token = localStorage.getItem('token');
>>>>>>> [Chore #160532247] Fix error handling
	if (token.length === 2) {
		const jwtToken = token[1];
=======
	const token = localStorage.getItem('token');
	const token2 = token.split('');
	if (token2.length === 2) {
		const jwtToken = token2[1];
>>>>>>> [Chore #160011178] return the decode token  file
		const decodedToken = jwtDecode(jwtToken);
		const userInfo = decodedToken.UserInfo;
		return userInfo;
	}
	return 'unauthorised';
};

export default decodeToken;

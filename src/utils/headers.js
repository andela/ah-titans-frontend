/**
 * get Token function returns a token
 * @params null
 * @returns {boolean}
 */

const getToken = () => {
	// return authorization header with jwt token
	const data = localStorage.getItem('username');
	const token = localStorage.getItem('token');
	if (!data || !token) {
		return {};
	}
	const { user } = JSON.parse(data);
	const { token2 } = JSON.parse(token);
	if (user && token2) {
		return { Authorization: `Token ${token2}` };
	}
	return {};
};
export default getToken;

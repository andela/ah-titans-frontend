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
	// const { user } = JSON.parse(data);
	// const { token2 } = JSON.parse(token);
	if (data && token) {
		return { Authorization: `Token ${token}` };
	}
	return {};
};
export default getToken;

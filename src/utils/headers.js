/**
 * get Token function returns a token
 * @params null
 * @returns {object}
 */
const getToken = () => {
	// return authorization header with jwt token
	const data = localStorage.getItem('username');
	const token = localStorage.getItem('token');
	if (!data || !token) {
		return {};
	}
	if (data && token) {
		return { Authorization: `Token ${token}` };
	}
	return {};
};
export default getToken;

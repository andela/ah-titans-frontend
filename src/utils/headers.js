/**
 * get Token function returns a token
 * @params null
 * @returns {boolean}
 */
const getToken = () => {
	const jwt = localStorage.getItem('user');
	return `Bearer ${jwt}`;
};

export default getToken;

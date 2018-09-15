/**
 * Represents an authentication header.
 * @constructor
 * @param {boolean} authenticated - Validation for an authenticated user.
 * @access - Public for both registered and unregistered users.
 */

const authHeader = () => {
	// return authorization header with jwt token
	const token = localStorage.getItem('token');
	const user = localStorage.getItem('username');
	if (!user) {
		return {};
	}
	// const { user } = JSON.parse(data);
	if (user && token) {
		return { Authorization: `Token ${token}` };
	}
	return {};
};
export default authHeader;

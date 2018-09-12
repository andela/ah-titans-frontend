/**
 * Represents an authentication header.
 * @constructor
 * @param {boolean} authenticated - Validation for an authenticated user.
 * @access - Public for both registered and unregistered users.
 */

const authHeader = (authenticated) => {
	// return authorization header with jwt token
	if (!authenticated) {
		return {};
	}
	const data = localStorage.getItem('user');
	if (!data) {
		return {};
	}
	const { user } = JSON.parse(data);
	if (user && user.token) {
		return { Authorization: `Token ${user.token}` };
	}
	return {};
};
export default authHeader;

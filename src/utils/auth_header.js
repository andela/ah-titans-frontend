/**
 * Represents an authentication header.
 * @constructor
 * @access - Public for both registered and unregistered users.
 */

const authHeader = () => {
	// return authorization header with jwt token
	const token = localStorage.getItem('token');
	const user = localStorage.getItem('username');
	if (!user) {
		return {};
	}
	if (user && token) {
		return { Authorization: `Token ${token}` };
	}
	return {};
};
export default authHeader;

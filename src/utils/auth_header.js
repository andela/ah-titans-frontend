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
<<<<<<< HEAD
<<<<<<< HEAD
=======
	// const { user } = JSON.parse(data);
>>>>>>> [Chore #160532247] Add tests
=======
>>>>>>> [Chore #160532247] Implement requested changes
	if (user && token) {
		return { Authorization: `Token ${token}` };
	}
	return {};
};
export default authHeader;

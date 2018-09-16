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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	if (data && token) {
		return { Authorization: `Token ${token}` };
=======
	const { user } = JSON.parse(data);
	const { token2 } = JSON.parse(token);
	if (user && token2) {
		return { Authorization: `Token ${token2}` };
>>>>>>> [Chore #160532247] Fix error handling
=======
	// const { user } = JSON.parse(data);
	// const { token2 } = JSON.parse(token);
=======
>>>>>>> [Chore #160532247] Implement requested changes
	if (data && token) {
		return { Authorization: `Token ${token}` };
>>>>>>> [Chore #160532247] Add tests
	}
	return {};
};
export default getToken;

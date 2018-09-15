/**
 * Logs out a user
 * @params {null}
 * @returnd {null}
 */
const logoutActiveUser = () => {
	localStorage.removeItem('token');
};

export default logoutActiveUser;

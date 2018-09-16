/**
 * Logs out a user
 * @params {null}
 * @return {null}
 */
const logoutActiveUser = () => {
	localStorage.removeItem('token');
};

export default logoutActiveUser;

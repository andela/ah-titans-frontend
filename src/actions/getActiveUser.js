import decodeUser from '../utils/decodeUser';
import { ACTIVE_USER } from './types';

const loadActiveUser = activeUser => ({
	type: ACTIVE_USER,
	user: activeUser,
});

const getActiveUser = () => {
	return ((dispatch) => {
		const activeUser = decodeUser();
		return dispatch(loadActiveUser(activeUser));
	});
};

export default getActiveUser;

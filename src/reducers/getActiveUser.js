import { ACTIVE_USER } from '../actions/types';

function getActiveUser(state = {}, action) {
	switch (action.type) {
		case ACTIVE_USER:
			return { ...state, ...action.user };
		default:
			return state;
	}
}

export default getActiveUser;

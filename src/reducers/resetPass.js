import { USER_RESET_PASS, USER_RESET_FAIL } from '../actions/types';

const prevState = {
	loading: false,
};

export default function resetPass(state = prevState, action = {}) {
	switch (action.type) {
		case USER_RESET_PASS:
			return action.user;
		case USER_RESET_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
}

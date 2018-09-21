import {
	USER_RESET_PASS, USER_RESET_FAIL, USER_RESETTING_PASS,
} from '../actions/types';

const prevState = {
	loading: false,
};

export default function resetPass(state = prevState, action) {
	switch (action.type) {
		case USER_RESETTING_PASS:
			return { ...state, loading: true };
		case USER_RESET_PASS:
			return { user: action.user, loading: false };
		case USER_RESET_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
}

import { PASS_RESET_TOKEN } from '../actions/types';

export default function newPass(state = {}, action = {}) {
	switch (action.type) {
		case PASS_RESET_TOKEN:
			return { ...state, ...action.token };
		default:
			return state;
	}
}

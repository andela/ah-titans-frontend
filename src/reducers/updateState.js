import { UPDATE_STATE } from '../actions/types';

const prevState = {
};

function updateStateReducer(state = prevState, action) {
	switch (action.type) {
		case UPDATE_STATE:
			return { ...state, ...action.user };
		default:
			return state;
	}
}

export default updateStateReducer;

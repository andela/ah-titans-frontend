import {
	GET_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_ERROR,
	GET_PROFILE_ERROR, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, CLEAR_STORE,
} from '../actions/types';

const initialState = {
	user: {},
	errors: {},
	isFetching: false,
	success: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PROFILE_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case GET_PROFILE:
			return {
				...state,
				user: action.payload.profiles,
				isFetching: false,
			};
		case GET_PROFILE_ERROR:
			return {
				...state,
				errors: action.payload.profile.errors.detail,
				isFetching: false,
			};
		case UPDATE_PROFILE_REQUEST:
			return {
				...state,
				isFetching: true,
			};
		case UPDATE_PROFILE:
			return {
				...state,
				user: action.payload.user,
				isFetching: false,
				success: true,
			};
		case UPDATE_PROFILE_ERROR:
			return {
				...state,
				errors: action.payload.errors,
				isFetching: false,
				success: false,
			};
		case CLEAR_STORE:
			return {
				...state,
				errors: {},
				isFetching: false,
				success: false,
			};
		default:
			return state;
	}
}

import * as types from '../actions/types';
import reducer from './article';

describe('viewArticles reducer', () => {
	const initialState = {
		items: {},
		error: {},
		isFetching: false,
		success: false,
	};

	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should set isFetching state to true', () => {
		const startAction = {
			type: types.GETTING_ARTICLE,
		};

		expect(
			reducer(initialState, startAction),
		).toEqual({ ...initialState, isFetching: true, success: false });
	});

	it('should return an error', () => {
		const startAction = {
			type: types.GET_ARTICLE_ERROR,
			payload: { errors: {}}
		};

		expect(reducer(initialState, startAction)).toEqual({ ...initialState, error: {}, isFetching: false, success: false });
	});

	it('should return an article object', () => {
		const startAction = {
			type: types.VIEW_ARTICLE,
			payload: { articles: {}},
		};

		expect(reducer(initialState, startAction)).toEqual({ ...initialState, success: true, isFetching: false });
	});
});

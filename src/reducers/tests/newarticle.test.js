import * as types from '../../actions/types';
import reducer from '../createArticleReducer';

describe(' create article returns errors for invalid input', () => {
	it('returns errors', () => { });
});

describe('create article reducer', () => {
	const requestData = {
		article: {
			title: 'django',
			description: 'TIA',
			body: 'This is Andela',
		},
	};
	const initialState = {
		item: { requestData },
		error: {},
		isFetching: false,
	};

	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});
	it('should set isFetching state to true', () => {
		const startAction = {
			type: types.NEW_ARTICLE_REQUEST,
		};
		expect(reducer(initialState, startAction)).toEqual({
			...initialState,
			isFetching: true,
		});
	});
	it('should create an article', () => {
		const startAction = {
			type: types.NEW_ARTICLE,
			payload: { requestData: { title: 'django', description: 'TIA', body: 'This is Andela' } },
		};

		expect(reducer(initialState, startAction)).toEqual({
			article: undefined,
			...initialState,
			isFetching: false,
		});
	});
});

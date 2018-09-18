import {
	createArticleRequest,
	createArticleActionCreator,
	createArticleError,
} from '../createArticlesAction';
import * as types from '../types';

describe('article actions', () => {
	it('should create an action createArticleRequest', () => {
		const expectedAction = {
			type: types.NEW_ARTICLE_REQUEST,
		};
		expect(createArticleRequest()).toEqual(expectedAction);
	});
	it('should create an action to create an article', () => {
		const data = {
			title: '',
			description: '',
			body: '',
		};
		const expectedAction = {
			type: types.NEW_ARTICLE,
			payload: data,
		};
		expect(createArticleActionCreator(data)).toEqual(expectedAction);
	});
	it('should create an action create article error', () => {
		const error = {
			title: '',
			description: '',
			body: '',
		};
		const expectedAction = {
			type: types.NEW_ARTICLE_ERROR,
			payload: error,
		};
		expect(createArticleError(error)).toEqual(expectedAction);
	});
});

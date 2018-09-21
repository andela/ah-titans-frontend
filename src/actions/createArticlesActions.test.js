import configureStore from 'redux-mock-store';
import {
	createArticleRequest, createArticleActionCreator, createArticleError,
} from './createArticlesAction';

import {
	NEW_ARTICLE,
	NEW_ARTICLE_REQUEST,
	NEW_ARTICLE_ERROR,
} from './types';

const mockStore = configureStore();
const store = mockStore();
const expectedAction = type => ({
	type,
});

describe('actions for creaticle a new article', () => {
	it('should create an action for new article request', () => {
		expect(
			createArticleRequest(),
		).toEqual(
			expectedAction(
				NEW_ARTICLE_REQUEST,
			),
		);
	});
	it('should create an action for creating a new article', () => {
		expect(
			createArticleActionCreator(),
		).toEqual(
			expectedAction(
				NEW_ARTICLE,
			),
		);
	});
	it('should create an action for new article request', () => {
		expect(
			createArticleError(),
		).toEqual(
			expectedAction(
				NEW_ARTICLE_ERROR,
			),
		);
	});
});

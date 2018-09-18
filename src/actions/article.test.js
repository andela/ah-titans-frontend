import configureStore from 'redux-mock-store';
import fetchArticle, { getArticleActionCreator, viewArticleActionCreator, getArticleErrorActionCreator } from './article';

import { VIEW_ARTICLE, GET_ARTICLE_ERROR, GETTING_ARTICLE } from './types';

const mockStore = configureStore();
const store = mockStore();

const expectedAction = type => ({
	type,
});

describe('create actions', () => {
	it('should create an action fetchArticle', () => {
		const expectedAction = {
			type: GETTING_ARTICLE,
		};
		expect(
			getArticleActionCreator(),
		).toEqual(
			expectedAction,
		);
	});

	it('should create an action get article', () => {
		expect(
			viewArticleActionCreator(),
		).toEqual(
			expectedAction(
				VIEW_ARTICLE,
			),
		);
	});

	it('should create an action get an article error', () => {
		expect(
			getArticleErrorActionCreator(),
		).toEqual(
			expectedAction(
				GET_ARTICLE_ERROR,
			),
		);
	});
});

describe('select view an article action', () => {
	const article = {};

	test('Dispatches article action and payload', () => {
		const expectedActions = [
			{
				type:
					'VIEW_ARTICLE',
				payload: article,
			},
		];

		store.dispatch(
			viewArticleActionCreator(
				article,
			),
		);
		expect(
			store.getActions(),
		).toEqual(
			expectedActions,
		);
	});
});

describe('select article errors action', () => {
	const errors = {};
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches article errors action and payload', () => {
		const expectedActions = [
			{
				type:
					'GET_ARTICLE_ERROR',
				payload: errors,
			},
		];

		store.dispatch(
			getArticleErrorActionCreator(
				errors,
			),
		);
		expect(
			store.getActions(),
		).toEqual(
			expectedActions,
		);
	});
});

describe('select getting an article action', () => {
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches getting an article action and payload', () => {
		const expectedActions2 = [
			{
				type:
					'GETTING_ARTICLE',
			},
		];
		store.dispatch(
			getArticleActionCreator(),
		);
		expect(
			store.getActions(),
		).toEqual(
			expectedActions2,
		);
	});
});

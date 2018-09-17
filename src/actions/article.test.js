import configureStore from 'redux-mock-store';
import fetchArticle, { getArticleActionCreator, viewArticleActionCreator, getArticleErrorActionCreator } from './article';

import { VIEW_ARTICLE, GET_ARTICLE_ERROR, GETTING_ARTICLE } from './types';

const mockStore = configureStore();
const store = mockStore();

const expectedAction = type => ({
	type,
});

describe('create actions', () => {
	it('should create an action getArticles', () => {
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

	it('should create an action get articles error', () => {
		expect(
			getArticleErrorActionCreator(),
		).toEqual(
			expectedAction(
				GET_ARTICLE_ERROR,
			),
		);
	});
});

describe('fetch articles', () => {
	fetch.mockResponseOnce(
		JSON.stringify(),
	);
	fetch(
		'https://ah-jn-api.herokuapp.com/api/articles/',
		{
			method:
				'GET',
			headers: {
				'Content-Type':
					'application/json',
			},
		},
	).then(
		(res) => {
			expect(
				res.body,
			).toEqual(
				JSON.parse(),
			);
		},
	);
});

describe('select view articles action', () => {
	const article = {};

	test('Dispatches view articles action and payload', () => {
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

describe('select view articles errors action', () => {
	const errors = {};
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches view articles errors action and payload', () => {
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

describe('select getting articles action', () => {
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches getting articles action and payload', () => {
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

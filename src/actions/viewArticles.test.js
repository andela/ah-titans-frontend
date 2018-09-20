import configureStore from 'redux-mock-store';
import getArticle, { getArticlesErrorActionCreator, gettingArticlesActionCreator, getArticlesActionCreator } from './viewArticles';

import { VIEW_ARTICLES, GETTING_ARTICLES, VIEW_ARTICLES_ERROR } from './types';

const mockStore = configureStore();
const store = mockStore();

const expectedAction = type => ({
	type,
});

describe('create actions', () => {
	it('should create an action getArticles', () => {
		const expectedAction = {
			type: GETTING_ARTICLES,
		};
		expect(gettingArticlesActionCreator()).toEqual(expectedAction);
	});

	it('should create an action get article', () => {
		expect(getArticlesActionCreator()).toEqual(expectedAction(VIEW_ARTICLES));
	});

	it('should create an action get articles error', () => {
		expect(getArticlesErrorActionCreator()).toEqual(expectedAction(VIEW_ARTICLES_ERROR));
	});
});

describe('fetch articles', () => {
	fetch.mockResponseOnce(
		JSON.stringify(),
	);
	fetch('https://ah-jn-api.herokuapp.com/api/articles',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	).then(
		(res) => {expect(res.body).toEqual(JSON.parse());
		},
	);
});

describe('select view articles action', () => {
	const articles = {};

	test('Dispatches view articles action and payload', () => {
		const expectedActions = [
			{
				type: 'VIEW_ARTICLES',
				payload: articles,
			},
		];

		store.dispatch(getArticlesActionCreator(articles));
		expect(store.getActions()).toEqual(expectedActions);
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
				type: 'VIEW_ARTICLES_ERROR',
				payload: errors,
			},
		];

		store.dispatch(getArticlesErrorActionCreator(errors));
		expect(store.getActions()).toEqual(expectedActions);
	});
});

describe('select getting articles action', () => {
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches getting articles action and payload', () => {
		const expectedActions2 = [
			{
				type: 'GETTING_ARTICLES',
			},
		];
		store.dispatch(gettingArticlesActionCreator());
		expect(store.getActions()).toEqual(expectedActions2);
	});
});

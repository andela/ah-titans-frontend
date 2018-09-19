import configureStore from 'redux-mock-store';
import { likeArticleActionCreator, dislikeArticleActionCreator, likeDislikeErrorActionCreator } from './likeDislike';

import { LIKE_ARTICLE, DISLIKE_ARTICLE, LIKE_DISLIKE_ERROR } from './types';

const mockStore = configureStore();
const store = mockStore();

const expectedAction = type => ({
	type,
});

describe('create actions', () => {
	it('should create an action like an article', () => {
		expect(
      likeArticleActionCreator(),
		).toEqual(
			expectedAction(
      LIKE_ARTICLE,
			),
		);
  });

  it('should create an action dislike an article', () => {
    expect(
      dislikeArticleActionCreator(),
    ).toEqual(
      expectedAction(
      DISLIKE_ARTICLE,
      ),
    );
  });

	it('should create an action get error on like/dislike', () => {
		expect(
      likeDislikeErrorActionCreator(),
		).toEqual(
			expectedAction(
      LIKE_DISLIKE_ERROR,
			),
		);
	});
});

describe('select like/dislike an article action', () => {
	const data = {};

	test('Dispatches like article action and payload', () => {
		const expectedActions = [
			{
				type:
					'LIKE_ARTICLE',
			},
		];

		store.dispatch(
      likeArticleActionCreator(
				data,
			),
		);
		expect(
			store.getActions(),
		).toEqual(
			expectedActions,
		);
	});
});

describe('select like/dislike errors action', () => {
	const errors = {};
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches like/dislike errors action and payload', () => {
		const expectedActions = [
			{
				type:
					'LIKE_DISLIKE_ERROR',
				payload: errors,
			},
		];

		store.dispatch(
      likeDislikeErrorActionCreator(
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

describe('select disliking an article action', () => {
	beforeEach(() => {
		store.clearActions();
	});
	test('Dispatches disliking an article action and payload', () => {
		const expected_actions = [
			{
				type:
					'DISLIKE_ARTICLE',
			},
		];
		store.dispatch(
      dislikeArticleActionCreator(),
		);
		expect(
			store.getActions(),
		).toEqual(
			expected_actions,
		);
	});
});

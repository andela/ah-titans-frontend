import * as types from '../actions/types';
import reducer from './likeDislike';

describe('viewArticles reducer', () => {
  const initialState = {
    error: {},
    isLiking: '',
    isDisliking: '',
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isLiking state to true', () => {
    const startAction = {
      type: types.LIKE_ARTICLE,
    };

    expect(reducer(initialState, startAction)).toEqual({ ...initialState, isLiking: true });
  });

  it('should set isDisliking state to true', () => {
    const startAction = {
      type: types.DISLIKE_ARTICLE,
    };

    expect(reducer(initialState, startAction)).toEqual({ ...initialState, isDisliking: true });
  });

  it('should return an error on like/dislike', () => {
    const startAction = {
      type: types.LIKE_DISLIKE_ERROR,
      payload: { errors: {} },
    };

    expect(reducer(initialState, startAction)).toEqual({ ...initialState, error: {}, isLiking: '', isDisliking: '' });
  });
});

import * as types from '../actions/types';
import reducer from './exampleReducer';

describe('exampleReducer', () => {
  const state = {
    new_user: false,
  };

  it('should return the initial state', () => {
    expect(reducer(state, { new_user: false, })).toEqual(state);
  });

  it('should set new_user to true', () => {
    const startAction = {
      type: types.CREATE_USER,
    };

    expect(reducer(state, startAction)).toEqual({
      ...state,
      new_user: true,
    });
  });
});

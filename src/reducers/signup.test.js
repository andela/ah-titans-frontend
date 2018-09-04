import * as types from '../actions/types';
import reducer from '../reducers/signup';

describe('Signup has errors if required fields missing', () => {
  it('returns errors', () => {});
});

describe('signup reducer', () => {
  const requestData = {
    email: 'johnmusiu@gmail.com',
    username: 'john',
    password: 'johntests',
  };

  const initialState = {
    item: { requestData },
    error: {},
    isFetching: false,
  };
  const startAction = {
    type: types.CREATE_USER,
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isFetching state to true', () => {
    const startAction = {
      type: types.SIGNUP_REQUEST,
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  // it('should raise an error');
});

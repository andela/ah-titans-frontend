import * as types from '../../actions/types';
import reducer from '../loginReducer';

describe('Signup has errors if required fields missing', () => {
  it('returns errors', () => {});
});

describe('login reducer', () => {
  const requestData = {
    email: 'manu@gmail.com',
    username: 'manu',
    password: 'manuerayle',
  };
  const initialState = {
    item: { requestData, },
    error: {},
    isFetching: false,
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it('should set isFetching state to true', () => {
    const startAction = {
      type: types.LOGIN_REQUEST,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });
});

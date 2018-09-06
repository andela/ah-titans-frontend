import * as types from '../../actions/types';
import reducer from '../loginReducer';

describe(' Login returns errors for invalid input', () => {
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

  it('should return an error', () => {
    const startAction = {
      type: types.LOGIN_ERROR,
      payload: { errors: { email: 'some error', }, },
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      errors: { email: 'some error', },
    });
  });
});

import * as types from '../../actions/types';
import reducer from '../google.login.reducer';

describe(' Login returns errors for invalid input', () => {
  it('returns errors', () => {});
});

describe('login reducer', () => {
  const requestData = 'faketoken';
  const initialState = {
    item: requestData,
    error: {},
    isFetchingGoogle: false,
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
  it('should set isFetching state to true', () => {
    const startAction = {
      type: types.GOOGLE_LOGIN_REQUEST,
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetchingGoogle: true,
    });
  });
  it('should not login a user since our token is still wrong', () => {
    const startAction = {
      type: types.GOOGLE_LOGIN_SUCCESS,
      payload: { access_token: { token: 'faketoken' } },
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isFetchingGoogle: false,
    });
  });
  it('should return an error', () => {
    const startAction = {
      type: types.GOOGLE_LOGIN_ERROR,
      payload: { errors: { email: 'some error' } },
    };

    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      errors: { email: 'some error' },
    });
  });
});
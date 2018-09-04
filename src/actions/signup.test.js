import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import createUser, {
  createUserActionCreator,
  signingUp,
  createUserErrorActionCreator,
} from './signup';

import * as types from '../actions/types';

describe('create actions', () => {
  it('should create an action signingUp', () => {
    const expectedAction = {
      type: types.SIGNUP_REQUEST,
    };
    expect(signingUp()).toEqual(expectedAction);
  });

  it('should create an action create user', () => {
    const data = {
      username: '',
      email: '',
      password: '',
    };
    const expectedAction = {
      type: types.CREATE_USER,
      payload: data,
    };
    expect(createUserActionCreator(data)).toEqual(expectedAction);
  });

  it('should create an action create user error', () => {
    const error = {
      username: '',
      email: '',
      password: '',
    };
    const expectedAction = {
      type: types.CREATE_USER_ERROR,
      payload: error,
    };
    expect(createUserErrorActionCreator(error)).toEqual(expectedAction);
  });
});

describe('create user', () => {
  it('should signup a user', () => {
    const user = {
      user: {
        email: 'johnmusiu@gmail.com',
        username: 'john',
        password: 'johntests',
      },
    };
    fetchMock
      .getOnce('https://ah-titans-api.herokuapp.com/api/users/', {
        user,
        headers: { 'content-type': 'application/json' },
      })
      .catch(err => console.log(err));

    const expectedActions = [
      {
        type: types.CREATE_USER,
        payload: { user: { username: 'john', token: 'a-token' } },
      },
      {
        type: types.CREATE_USER_ERROR,
        payload: { error: { username: 'some error' } },
      },
    ];
    const store = mockStore({
      item: {},
      error: {},
      isFetching: false,
    });

    return store.dispatch(createUser(user)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

import {
  createUserActionCreator,
  signingUp,
  createUserErrorActionCreator,
} from './signup';

import * as types from './types';

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

    fetch.mockResponseOnce(JSON.stringify(user));
    fetch('https://ah-jn-api.herokuapp.com/api/users/', {
      method: 'POST',
      body: JSON.stringify({ user: { username: 'Musiu' } }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      expect(res.body).toEqual(JSON.parse(user));
    });
  });
});

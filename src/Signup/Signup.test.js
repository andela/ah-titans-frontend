import React from 'react';
import { shallow } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';
import reducer from '../reducers/signup';
import * as types from '../actions/types';
import store from '../store';

describe('User Signup', () => {
  it('renders the signup succefully', () => {
    shallow(<Signup store={store} onChange={() => ''} onClick={() => ''} />);
  });
  it('returns a form', () => {
    shallow(
      <SignupForm store={store} onChange={() => ''} onClick={() => ''} />,
    );
  });
});

describe('Signup from', () => {
  it('renders input fields and a button ', () => {
    const signupFormWrapper = shallow(
      <SignupForm store={store} onChange={() => ''} onClick={() => ''} />,
    );
    expect(signupFormWrapper.find('Input').length).toEqual(4);
    expect(signupFormWrapper.find('Button').length).toEqual(1);
  });
});

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

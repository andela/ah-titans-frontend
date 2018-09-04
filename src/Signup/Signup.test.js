import React from 'react';
import { shallow } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';
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

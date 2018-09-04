import React from 'react';
import { shallow, } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';

describe('User Signup', () => {
  it('renders the signup succefully', () => {
    shallow(<Signup />);
  });
  it('returns a form', () => {
    shallow(<SignupForm />);
  });
});

describe('Signup from', () => {
  it('renders input fields and a button ', () => {
    const signupFormWrapper = shallow(<SignupForm />);
    expect(signupFormWrapper.find('Input').length).toEqual(4);
    expect(signupFormWrapper.find('Button').length).toEqual(1);
  });
});

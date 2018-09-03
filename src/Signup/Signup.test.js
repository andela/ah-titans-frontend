import React from 'react';
import { shallow, } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';

describe('User Signup', () => {
  it('renders the signup form succefully', () => {
    shallow(<Signup />);
  });
});

describe('Signup input fields', () => {
  it('renders input fields', () => {
    const signupFormWrapper = shallow(<SignupForm />);
    expect(signupFormWrapper.find('Input').length).toEqual(4);
  });
});

describe('Signup button', () => {
  it('renders a signup button', () => {
    const signupFormWrapper = shallow(<SignupForm />);
    expect(signupFormWrapper.find('Button').length).toEqual(1);
  });
});

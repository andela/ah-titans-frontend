import React from 'react';
import { shallow, } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';

describe('User Signup', () => {
  it('renders the signup form succefully', () => {
    shallow(<Signup />);

  });
});

describe('Signup form', () => {
  it('returns a form', () => {
    const signupFormWrapper = shallow(<SignupForm />);
    expect(signupFormWrapper.find('form').length).toEqual(1);
  });
});

import React from 'react';
import { shallow, } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';

describe('User Signup', () => {
  it('renders the signup form', () => {
    const signupWrapper = shallow(<Signup />);

    expect(signupWrapper.find('SignupForm').length).toBe(1);

  });
  it('returns a form', () => {
    const signupFormWrapper = shallow( <SignupForm /> );

    expect(signupFormWrapper.find('form').length).toEqual(1);
  });
});

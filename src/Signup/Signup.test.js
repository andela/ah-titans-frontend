import React from 'react';
import { shallow } from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';
import store from '../store';

describe('Signup from', () => {
  it('renders input fields and a button ', () => {
    const signupFormWrapper = shallow(
      <SignupForm store={store} onChange={() => ''} onClick={() => ''} />,
    );
    expect(signupFormWrapper.find('Input').length).toEqual(4);
    expect(signupFormWrapper.find('Button').length).toEqual(1);
  });
});

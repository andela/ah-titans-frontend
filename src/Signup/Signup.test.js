import React from 'react';
import { shallow, } from 'enzyme';

import Signup from './containers/Signup';

describe('User Signup', () => {
  it('renders the form', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.find('SignupForm').length).toBe(1);
  });
});

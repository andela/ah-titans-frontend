import React from 'react';
import { shallow, } from 'enzyme';

import Signup from '../../components/signup/Signup';

describe('User Signup', () => {
  it('renders the form', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.find('form').length).toBe(1);
  });

  it('has a sign up now title', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.find('h2')).toBe('Sign up now');
  });
});

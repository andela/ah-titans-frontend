import React from 'react';
import { shallow, mount} from 'enzyme';

import Signup from './containers/Signup';
import SignupForm from './components/SignupForm';

describe('User Signup', () => {
  it('renders the signup form', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.find('SignupForm').length).toBe(1);

  });
  it('renders a form', () => {
    const wrapper = shallow( <SignupForm /> );

    expect(wrapper.find('form').length).toBe(1);
  });
});

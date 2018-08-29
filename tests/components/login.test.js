import React from 'react';
import { shallow, } from 'enzyme';
import Login from '../../src/components/Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});

import React from 'react';
import { shallow, } from 'enzyme';
import Login from '../../src/Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});

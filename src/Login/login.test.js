import React from 'react';
import { shallow, } from 'enzyme';
import Login from './components';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});

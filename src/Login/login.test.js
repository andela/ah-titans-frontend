import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './components';
import store from '../store';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<LoginForm store={store} onChange={() => ''} onClick={() => ''} />);
  });
});

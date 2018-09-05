import React from 'react';
import { shallow, } from 'enzyme';
import { Provider, } from 'react-redux';
import Login from './containers';
import store from '../store';


describe('Login', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });
});

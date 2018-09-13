import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import Login from '.';
import store from '../../store';


describe('<Login />', () => {
  const loginWrapper = shallow(
    <MemoryRouter initialEntries={['/login',]}>
      <Provider store={store}>
        <Login />
      </Provider>
    </MemoryRouter>
  );

  it('renders the login form', () => {
    expect(loginWrapper.find(Login)).toHaveLength(1);
  });
});

import React from 'react';
import { mount, shallow, } from 'enzyme';
import { Route, MemoryRouter, } from 'react-router';
import App from '../../src/views/App';
import Main from '../../src/views/Main';
import Login from '../../src/Login';
import Home from '../../src/Home';
import NotFound from '../../src/views/Error_pages/page_not_found';

it('renders correct routes', () => {
  const wrapper = shallow(<Main />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  expect(pathMap['/']).toBe(Home);
  expect(pathMap['/login']).toBe(Login);
});

test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(NotFound)).toHaveLength(1);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(NotFound)).toHaveLength(0);
});

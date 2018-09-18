import React from 'react';
import { mount, shallow } from 'enzyme';
import { Route, MemoryRouter, } from 'react-router';
import { Provider, } from 'react-redux';
import App from '../App';
import store from '../store';
import Main from './components';
import Login from '../Login/containers';
import Home from '../Home/containers';
import NotFound from '../Error_pages/components/page_not_found';
import Signup from '../Signup/containers/Signup';


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

describe('invalid path should redirect to 404', () => {
	it('redirects to 404', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/random']}>
				<App />
			</MemoryRouter>,
		);
		expect(wrapper.find(Login)).toHaveLength(0);
		expect(wrapper.find(NotFound)).toHaveLength(1);
	});
});

it('valid path should not redirect to 404', () => {
	const wrapper = mount(
		<Provider store={store}>
			<MemoryRouter initialEntries={['/signup']}>
				<App />
			</MemoryRouter>
		</Provider>,
	);
	expect(wrapper.find(Signup)).toHaveLength(1);
	expect(wrapper.find(NotFound)).toHaveLength(0);
});

import React from 'react';
import { shallow } from 'enzyme';
import { Route, MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store';
import Main from './components';
import Login from '../Login/containers';
import Home from '../Home/containers';
import NotFound from '../Error_pages/components/page_not_found';

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
	});
});

it('valid path should not redirect to 404', () => {
	const wrapper = shallow(
		<Provider store={store}>
			<MemoryRouter initialEntries={['/signup']}>
				<App />
			</MemoryRouter>
		</Provider>,
	);
	expect(wrapper.find(NotFound)).toHaveLength(0);
});

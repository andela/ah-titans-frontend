import React from 'react';
import { mount, } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components';
import store from '../store';
import CreateArticleButton from './components/btnCreateArticle';


describe('Home', () => {
	const homeWrapper = mount(
		<MemoryRouter initialEntries={['/' ]}>
			<Provider store={store}>
				<Home />
			</Provider>
		</MemoryRouter>,
	);
	it('does not renders button when user is not logged in', () => {
		expect(homeWrapper.find(CreateArticleButton)).toHaveLength(0);
	});
});

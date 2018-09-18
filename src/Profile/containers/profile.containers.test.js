import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from './ProfileContainer';
import ProfilePage from '../components/ProfileComponent';
import store from '../../store';

describe('<Profile />', () => {
	const profileWrapper = mount(
		<MemoryRouter initialEntries={['/profile']}>
			<Provider store={store}>
				<Profile match={{ params: { username: 'Ronnie' }, isExact: true }} />
			</Provider>
		</MemoryRouter>,
	);
	it('should render the <ProfilePage /> component', () => {
		expect(profileWrapper.find(ProfilePage).length).toEqual(1);
	});
	it('should call onClick event on click', () => {
		const onClick = jest.fn();
		const wrapper = mount(
			<MemoryRouter>
				<Provider store={store}>
					<ProfilePage handleClick={onClick} />
				</Provider>
			</MemoryRouter>,
		);
		wrapper.find('#update').first().simulate('click');
		expect(onClick).toHaveBeenCalled();
	});
});

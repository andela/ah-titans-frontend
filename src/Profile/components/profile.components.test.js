import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
	Card, Col, Row, Button, Modal, Input,
} from 'react-materialize';
import store from '../../store';
import ProfilePage from './ProfileComponent';

describe('<ProfilePage />', () => {
	const wrapper = mount(
		<MemoryRouter>
			<Provider store={store}>
				<ProfilePage errors={{ errors: { username: '' } }} />
			</Provider>
		</MemoryRouter>,
	);
	it('should render one <Card /> component', () => {
		expect(wrapper.find(Card).length).toEqual(1);
	});
	it('should render three <Col /> components', () => {
		expect(wrapper.find(Col).length).toEqual(3);
	});
	it('should render five <Row /> components', () => {
		expect(wrapper.find(Row).length).toEqual(5);
	});
	it('should render one <Modal/> components', () => {
		expect(wrapper.find(Modal).length).toEqual(1);
	});
	it('should render three <Input /> components', () => {
		expect(wrapper.find(Input).length).toEqual(3);
	});
	it('should render three <Button /> components', () => {
		expect(wrapper.find(Button).length).toEqual(3);
	});
});

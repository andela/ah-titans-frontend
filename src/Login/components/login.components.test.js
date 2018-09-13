import React from 'react';
import { shallow } from 'enzyme';
import {
	Col, Card, Row, Input, Button,
} from 'react-materialize';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import LoginForm from '.';
import store from '../../store';

describe('<LoginForm />', () => {
	const wrapper = shallow(
		<LoginForm
			store={store}
			onClick={() => ''}
			onChange={() => ''}
			errors={{ error: [], email: [], password: [] }}
			isFetching
		/>,
	);
	it('renders one <Card /> component', () => {
		expect(wrapper.find(Card).length).toEqual(1);
	});

	it('renders four <Row /> components', () => {
		expect(wrapper.find(Row).length).toEqual(4);
	});

	it('renders one <Button /> components', () => {
		expect(wrapper.find(Button).length).toEqual(1);
	});

	it('renders three error fields', () => {
		expect(wrapper.find('.error').length).toEqual(3);
	});

	it('renders two input fields', () => {
		expect(wrapper.find(Input).length).toEqual(2);
	});

	it('renders three column components', () => {
		expect(wrapper.find(Col).length).toEqual(3);
	});

	it('render one facebook login button', () => {
		expect(wrapper.find(FacebookLogin).length).toEqual(1);
	});

	it('render one google login button', () => {
		expect(wrapper.find(GoogleLogin).length).toEqual(1);
	});
});

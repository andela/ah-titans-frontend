import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResetPassword from '.';
import ResetPasswordForm from '../components';

describe('<ResetPassword />', () => {
	it('should render without crushing', () => {
		const snap = shallow(<ResetPassword submit={() => ''} />);
		expect(snap).toMatchSnapshot();
	});
	it('should render <ResetPasswordForm />', () => {
		const snap = shallow(
			<ResetPasswordForm
				onSubmit={() => ''}
				errors={{}}
				data=""
				onChange={() => ''}
				onValidate={() => ''}
				loading={false}
				disabled
			/>,
		);
		expect(snap).toMatchSnapshot();
	});
});


describe('Password Input', () => {
	it('should respond to null input', () => {
		const wrapper = shallow(<ResetPassword />);
		wrapper.find('ResetPasswordForm').prop('onValidate')();
		expect(wrapper.state('errors')).toEqual({ email: 'Email is required' });
	});
	it('should respond to invalid email input', () => {
		const wrapper = shallow(<ResetPassword />);
		wrapper.setState({
			data: {
				email: 'invalid@email',
			},
		});
		wrapper.find('ResetPasswordForm').prop('onValidate')();
		expect(wrapper.state('errors')).toEqual({ email: 'Email is invalid' });
	});
	it('should call onChange prop', () => {
		const onChangeMock = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: 'the-value' },
		};
		const component = shallow(<ResetPassword onChange={onChangeMock} />);
		component.find('ResetPasswordForm').simulate('change', { target: { value: 'matched' } });
		expect(toJson(component)).toMatchSnapshot();
	});
	it('should not submit data due to incorrect input', () => {
		const onSubmitMock = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: 'the-value' },
		};
		const component = shallow(<ResetPassword onSubmit={onSubmitMock} />);
		component.setState({
			data: {
				email: 'invalid@email',
			},
		});
		component.find('ResetPasswordForm').simulate('submit', event);
		expect(toJson(component)).toMatchSnapshot();
	});
});

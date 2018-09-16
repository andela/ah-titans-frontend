import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewPassword from '.';

describe('<NewPassword />', () => {
	it('should render without crushing', () => {
		const snap = shallow(<NewPassword />);
		expect(snap).toMatchSnapshot();
	});
});


describe('Password Input', () => {
	it('should respond to empty password input', () => {
		const wrapper = shallow(<NewPassword />);
		wrapper.find('NewPassForm').prop('onValidate')();
		expect(wrapper.state('errors')).toEqual({ cpassword: 'You need to confirm your password', new_password: 'Password should be at least 8 characters' });
	});
	it('should call onChange prop', () => {
		const onChangeMock = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: 'the-value' },
		};
		const component = shallow(<NewPassword onChange={onChangeMock} />);
		component.find('NewPassForm').simulate('change', { target: { value: 'matched' } });
		expect(toJson(component)).toMatchSnapshot();
	});
	it('should not submit data due to incorrect input', () => {
		const onSubmitMock = jest.fn();
		const event = {
			preventDefault() {},
			target: { value: 'the-value' },
		};
		const component = shallow(<NewPassword onSubmit={onSubmitMock} />);
		component.setState({
			data: {
				new_password: 'aaaAAA111',
				cpassword: 'aaaAA111',
			},
		});
		component.find('NewPassForm').simulate('submit', event);
		expect(toJson(component)).toMatchSnapshot();
	});
});

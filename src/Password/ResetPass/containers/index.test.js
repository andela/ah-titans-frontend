import React from 'react';
import { shallow } from 'enzyme';
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

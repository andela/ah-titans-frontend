import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordForm from '.';
import InlineError from './InlineError';

describe('<ResetPass />', () => {
	it('should render without crushing', () => {
		const snap = shallow(
			<ResetPasswordForm
				onSubmit={() => ''}
				errors={{}}
				data=""
				onChange={() => ''}
				onValidate={() => ''}
				loading={() => ''}
				disabled
			/>,
		);
		expect(snap).toMatchSnapshot();
	});

	it('should render <InlineError />', () => {
		const snap = shallow(<InlineError text="" />);
		expect(snap).toMatchSnapshot();
	});
});

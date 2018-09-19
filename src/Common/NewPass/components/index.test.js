import React from 'react';
import { shallow } from 'enzyme';
import NewPassForm from '.';

describe('<ResetPass />', () => {
	it('should render without crushing', () => {
		const snap = shallow(
			<NewPassForm
				onChange={() => ''}
				onSubmit={() => ''}
				onValidate={() => ''}
				errors={{}}
				loading={() => ''}
				data=""
			/>,
		);
		expect(snap).toMatchSnapshot();
	});
});

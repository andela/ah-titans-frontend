import React from 'react';
import { shallow } from 'enzyme';
import ResetPass from '.';
import store from '../../store';
import ResetPassword from './containers';

describe('<ResetPass />', () => {
	it('should render without crushing', () => {
		const snap = shallow(<ResetPass store={store} submit={() => ''} />);
		expect(snap).toMatchSnapshot();
	});
	it('should render <ResetPassword />', () => {
		const snap = shallow(
			<ResetPassword
				submit={() => ''}
			/>,
		);
		expect(snap).toMatchSnapshot();
	});
});

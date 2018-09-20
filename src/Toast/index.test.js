import React from 'react';
import { shallow } from 'enzyme';
import Toast from './index';
import store from '../store';

describe('Toast', () => {
	const wrapper = shallow(
		<Toast store={store} />,
	);

	it('shound render toaster component', () => {
		expect(wrapper.find('.toaster').length).toEqual(1);
	});
});

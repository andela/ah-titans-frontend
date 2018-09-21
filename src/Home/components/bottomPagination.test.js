import React from 'react';
import { shallow } from 'enzyme';
import BottomPagination from './bottomPagination';

describe('`<BottomPagination />` component', () => {
	it('should render without crushing', () => {
		const snap = shallow(
			<BottomPagination />,
		);
		expect(snap).toMatchSnapshot();
	});
});

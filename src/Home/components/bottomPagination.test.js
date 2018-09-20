import React from 'react';
import { shallow } from 'enzyme';
import BottomPagination from './bottomPagination';

describe('<Pagination /> component', () => {
	it('should render without crushing', () => {
		const snap = shallow(
			<BottomPagination
				activePage=""
				itemsCountPerPage=""
				totalItemsCount=""
				pageRangeDisplayed=""
				onChange={() => ''}
			/>,
		);
		expect(snap).toMatchSnapshot();
	});
});

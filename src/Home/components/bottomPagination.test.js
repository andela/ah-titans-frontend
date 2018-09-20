import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './bottomPagination';

describe('<ResetPass />', () => {
	it('should render without crushing', () => {
		const snap = shallow(
			<Pagination
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

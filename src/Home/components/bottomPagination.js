import React from 'react';
import Pagination from 'react-js-pagination';

const BottomPagination = ({ totalItemsCount, activePage, onChange }) => (
	<Pagination
		activePage={activePage}
		itemsCountPerPage={10}
		totalItemsCount={totalItemsCount}
		pageRangeDisplayed={5}
		onChange={onChange}
	/>
);

export default BottomPagination;

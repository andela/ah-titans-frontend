import React from 'react';
import PropTypes from 'prop-types';

const LikeDislike = ({
	id, icon, count, onClick,
}) => (
	<div>
		<span>{count}</span>
		<a href="#" onClick={onClick}>
			<i className="material-icons" id={id}>{icon}</i>
		</a>
	</div>
);

export default LikeDislike;

LikeDislike.propTypes = {
	id: PropTypes.any.isRequired,
	icon: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
};

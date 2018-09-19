import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const InlineError = ({ text }) => (
	<span className="error">{text}</span>
);


InlineError.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	]).isRequired,
};

export default InlineError;

import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text, }) => (
  <span style={{ color: 'red', }}>{text}</span>
);


InlineError.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export default InlineError;

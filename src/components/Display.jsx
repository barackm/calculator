import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <h3>{result}</h3>;

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
export default Display;

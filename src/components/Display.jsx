import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display-container">
    <h3 title="result">{result}</h3>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
export default Display;

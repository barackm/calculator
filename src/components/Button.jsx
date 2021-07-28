import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, onClick, color, wide,
}) => (
  <button
    className={wide ? 'zero' : ''}
    type="button"
    style={{ backgroundColor: color }}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
export default Button;

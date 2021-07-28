import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    props.clickHandler(buttonName); //eslint-disable-line
  };
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  const operators = ['+', '-', '=', '÷', 'x'];
  return (
    <>
      <div className="btn-group">
        {group1.map((item) => (
          <Button name={item} key={item} onClick={handleClick} color={!operators.includes(item) ? 'white' : 'orange'} />
        ))}
      </div>
      <div className="btn-group">
        {group2.map((item) => (
          <Button name={item} key={item} onClick={handleClick} color={!operators.includes(item) ? 'white' : 'orange'} />
        ))}
      </div>
      <div className="btn-group">
        {group3.map((item) => (
          <Button name={item} key={item} onClick={handleClick} color={!operators.includes(item) ? 'white' : 'orange'} />
        ))}
      </div>
      <div className="btn-group">
        {group4.map((item) => (
          <Button name={item} key={item} onClick={handleClick} color={!operators.includes(item) ? 'white' : 'orange'} />
        ))}
      </div>
      <div className="btn-group">
        {group5.map((item) => (
          <Button name={item} key={item} onClick={handleClick} wide={item === '0'} color={!operators.includes(item) ? 'white' : 'orange'} />
        ))}
      </div>
    </>
  );
};

ButtonPanel.prototype = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;

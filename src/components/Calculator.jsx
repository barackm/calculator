import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-left-area">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus magni velit tempora quam ut tempore totam sapiente quod
          voluptatem soluta.
        </p>
      </div>
      <div className="calculater-main-container">
        <Display result={next} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;

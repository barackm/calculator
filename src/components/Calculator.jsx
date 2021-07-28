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
    <div className="calculator-wrapper d-flex justify-content-center align-items-center px-5">
      <div className="overlay-calculator" />
      <div className="calculator-left-area">
        <h3>Make all your Calculations Here</h3>
        <hr className="diviser" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus magni velit tempora quam ut tempore totam sapiente quod
          voluptatem soluta. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quasi, magni minima omnis adipisci excepturi amet quaerat
          commodi tempora hic enim voluptas quae quisquam consequuntur? Harum
          ducimus nulla explicabo fugiat aspernatur?
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

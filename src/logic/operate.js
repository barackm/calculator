import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case 'X':
      result = Big(numberOne * numberTwo);
      break;
    case '+':
      result = Big(numberOne + numberTwo);
      break;
    case '-':
      result = Big(numberOne - numberTwo);
      break;
    case '÷':
      result = Big(numberOne / numberTwo);
      break;
    default:
      break;
  }
  return result;
};

export default operate;

import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const first = numberOne !== null ? Big(numberOne) : 0;
  const second = numberTwo !== null ? Big(numberTwo) : 0;
  let result = 0;
  switch (operator) {
    case 'X':
      result = first.times(second);
      break;
    case '+':
      result = first.plus(second);
      break;
    case '-':
      result = first.minus(second);
      break;
    case '÷':
      result = first.div(second);
      break;
    case '%':
      result = first.times(0.1);
      break;
    default:
      break;
  }
  return result.toString();
};

export default operate;

import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const modifiers = ['AC', '+/-', '%', '.', '='];
  const operators = ['+', '-', 'X', '÷'];
  if (modifiers.includes(buttonName)) {
    switch (buttonName) {
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '+/-':
        if (next === total) {
          total *= -1;
          next = total.toString();
        } else if (!operation) {
          total *= -1;
          next = total.toString();
        }
        break;
      case '=':
        if (next && operation) {
          if (next.split(`${operation}`)[1]) {
            const splitted = next.split(`${operation}`);
            total = operate(splitted[0], splitted[1], operation);
            operation = null;
          }
        }
        break;
      case '.':
        if (next && !operation) {
          next += '.';
        } else if (next && operation) {
          const splitted = next.split(`${operation}`);
          if (splitted[1]) {
            next += '.';
          }
        }
        break;
      default:
        break;
    }
  } else if (operators.includes(buttonName)) {
    if (!operation) {
      operation = buttonName;
      next += operation;
    } else {
      const splitted = next.split(`${operation}`);
      if (!splitted[1]) {
        operation = buttonName;
        next = splitted[0] + operation;
      } else {
        total = operate(splitted[0], splitted[1], operation);
        operation = buttonName;
        next = total;
      }
    }
  } else {
    const button = buttonName;
    if (operation) {
      next += button;
    } else {
      next += button;
    }
  }
  return { total, next, operation };
};

export default calculate;

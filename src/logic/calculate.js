import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const modifiers = ['AC', '+/-', '%', '.', '='];
  const operators = ['+', '-', 'x', '÷'];
  if (modifiers.includes(buttonName)) {
    switch (buttonName) {
      case 'AC':
        total = null;
        next = '0';
        operation = null;
        break;
      case '+/-':
        if (next && !total && !operation) {
          next = (next * -1).toString();
        } else if (operation) {
          const splitted = next.split(`${operation}`);
          if (splitted[1]) {
            const newOperand = (splitted[1] * -1).toString();
            next = splitted[0] + operation + '('.concat(newOperand).concat(')');
          }
        }
        break;
      case '=':
        if (next && operation) {
          const splitted = next.split(`${operation}`);
          if (splitted[1]) {
            if (operation === '÷' && splitted[1] === '0') {
              next = 'Zero division error.';
              total = null;
              operation = null;
            } else {
              const newOperand = splitted[1]
                .replace('(', '')
                .replace(')', '')
                .trim();
              total = operate(splitted[0], newOperand, operation);
              next = total;
              operation = null;
              return { total, next, operation };
            }
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
      case '%':
        if (total && !operation) {
          total = operate(total, null, '%');
          next = total;
          operation = null;
        } else if ((!operation, next)) {
          total = operate(next, null, '%');
          next = total;
          operation = null;
          return { total, next, operation };
        }
        break;
      default:
        break;
    }
  } else if (operators.includes(buttonName)) {
    if (next === 'Zero division error.') {
      next = '0';
    }
    if (!operation) {
      operation = buttonName;
      next += operation;
    } else {
      const splitted = next.split(`${operation}`);
      if (!splitted[1]) {
        operation = buttonName;
        next = splitted[0] + operation;
      } else {
        const op = operation;
        if (op === '÷' && splitted[1] === '0') {
          next = 'Zero division error.';
          total = null;
          operation = null;
        } else {
          const newOperand = splitted[1]
            .replace('(', '')
            .replace(')', '')
            .trim();
          total = operate(splitted[0], newOperand, operation);
          operation = buttonName;
          next = total + buttonName;
        }
      }
    }
  } else {
    if (next === 'Zero division error.') {
      next = '0';
    }
    const button = buttonName;
    if (next === '0') {
      next = buttonName;
      return { total, next, operation };
    }
    if (operation) {
      next += button;
    } else {
      next += button;
    }
  }
  return { total, next, operation };
};

export default calculate;

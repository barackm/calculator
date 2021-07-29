import operate from '../logic/operate';

describe('Operate', () => {
  it('Should give the sum of two given numbers is the operator is +', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  it('Should give the difference of two given numbers is the operator is -', () => {
    const result = operate(2, 3, '-');
    expect(result).toBe('-1');
  });

  it('Should give the product of two given numbers is the operator is x', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  it('Should give the percentage of the first number is the operator is %', () => {
    const result = operate(2, 3, '%');
    expect(result).toBe('0.2');
  });

  it('Should give the rest of the division is the operator is ÷', () => {
    const result = operate(10, 2, '÷');
    expect(result).toBe('5');
  });

  it('Should give a 0 error if given a wrong operator', () => {
    const result = operate(10, 2, '/');
    expect(result).toBe('0');
  });

  it('Should throw an error if given a wrong number', () => {
    expect(() => operate('/', 2, '/')).toThrow();
  });

  it('Should throw an error if given a wrong number', () => {
    expect(() => operate('{}', 2, '/')).toThrow();
  });
});

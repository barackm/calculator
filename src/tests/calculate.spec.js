import calculate from '../logic/calculate';

describe('Calculate', () => {
  it('should display the given value as next (number to be dislayed)', () => {
    const result = calculate({ total: null, next: '0', operation: null }, '1');
    expect(result.next).toBe('1');
  });

  it('should concantinate the buttonName with the previous number if operation is null', () => {
    const result = calculate({ total: null, next: '2', operation: null }, '1');
    expect(result.next).toBe('21');
  });

  it('should concantinate the operator with the previous number(s) if the right operand is not given', () => {
    const result = calculate({ total: null, next: '21', operation: null }, '+');
    expect(result.next).toBe('21+');
    expect(result.operation).toBe('+');
  });

  it('should give + as operator if given', () => {
    const result = calculate({ total: null, next: '21', operation: null }, '+');
    expect(result.operation).toBe('+');
  });

  it('should divide the two given numbers', () => {
    const result = calculate({ total: null, next: '2÷1', operation: '÷' }, '=');
    expect(result.total).toBe('2');
  });

  it('should give the some of two given number is the operation is +', () => {
    const result = calculate(
      { total: null, next: '21+10', operation: '+' },
      '=',
    );
    expect(result.total).toBe('31');
  });

  it('should give the product of two given number is the operation is x', () => {
    const result = calculate(
      { total: null, next: '21x10', operation: 'x' },
      '=',
    );
    expect(result.total).toBe('210');
  });

  it('should give the difference of two given number is the operation is -', () => {
    const result = calculate(
      { total: null, next: '21-10', operation: '-' },
      '=',
    );
    expect(result.total).toBe('11');
  });

  it('should give the percentage of the first operand if the buttonName is %', () => {
    const result = calculate({ total: null, next: '66', operation: '%' }, '%');
    expect(result.total).toBe('6.6');
  });

  it('should return 0 as next if the buttonName is AC', () => {
    const result = calculate({ total: null, next: '66', operation: '%' }, 'AC');
    expect(result.next).toBe('0');
  });

  it('should return 23. as next if the buttonName is .', () => {
    const result = calculate({ total: null, next: '23', operation: null }, '.');
    expect(result.next).toBe('23.');
  });

  it('should throw 0 error if trying to make a zero division', () => {
    const result = calculate({ total: null, next: '0÷3', operation: '÷' }, '=');
    expect(result.next).toBe('0');
  });

  it('should throw Zero division error.', () => {
    const result = calculate({ total: null, next: '10÷0', operation: '÷' }, '=');
    expect(result.next).toBe('Zero division error.');
  });
});

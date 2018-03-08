let calculator = require('./app');

describe('add', () => {
  it('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toEqual(0);
  });

  it('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toEqual(4);
  });

  it('adds negative numbers', () => {
    expect(calculator.add(2, -6)).toEqual(-4);
  });
});

describe('subtract', () => {
  it('subtracts numbers', () => {
    expect(calculator.subtract(10,4)).toEqual(6);
  });

  it('subtract negative numbers', () => {
    expect(calculator.subtract(-6, 4)).toEqual(-10);
  });
});

describe('multiply', () => {
  it('multiplies numbers', () => {
    expect(calculator.multiply(2,4)).toEqual(8);
  });

  it('multiplies numbers when one number is negative', () => {
    expect(calculator.multiply(-2, 6)).toEqual(-12);
  });
});

describe('divide', () => {
  it('divides 2 by 2', () => {
    expect(calculator.divide(2, 2)).toEqual(1);
  });

  it('divide negative numbers', () => {
    expect(calculator.divide(4, -2)).toEqual(-2);
  });
});

describe('operate', () => {
  it('calls "add" function', () => {
    expect(calculator.operate('+', 2, 3)).toEqual(5);
  });

  it('calls "subtract" function', () => {
    expect(calculator.operate('-', 3, 2)).toEqual(1);
  });

  it('calls "multiply"', () => {
    expect(calculator.operate('*', 3, 2)).toEqual(6);
  });

  it('calls "divide"', () => {
    expect(calculator.operate('/', 2, 2)).toEqual(1);
  });
});


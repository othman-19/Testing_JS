import calculator from '../src/calculator';

test('2 plus 2 is equal to 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('4 minus 2 is equal to 2', () => {
  expect(calculator.substract(4, 2)).toBe(2);
});

test('4 into 2 is equal to 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('4 divided by 2 is equal to 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('does not let you divide by zero', () => {
  expect(calculator.divide(4, 0)).toBe('Cannot divide by zero');
});

/* eslint-env jest */
import capitalize from '../src/capitalize';

test('it changes the first letter of a string to upper case', () => {
  expect(capitalize('othman')).toBe('Othman');
});

test('it returns not a valid word when it starts without a letter', () => {
  expect(capitalize('1othman')).toBe('not a valid word');
});

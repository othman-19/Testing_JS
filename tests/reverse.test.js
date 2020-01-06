/* eslint-env jest */
import reverseString from '../src/reverse';

test('it reverse a string', () => {
  expect(reverseString('sumaer')).toBe('reamus');
});

test('entry should be a string', () => {
  expect(reverseString(123)).toBe('not a string');
});

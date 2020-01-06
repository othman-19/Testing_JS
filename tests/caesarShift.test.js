/* eslint-env jest */
import caesarShift from '../src/caesarShift';

test('it shift character by 3', () => {
  expect(caesarShift('aaa', 3)).toBe('ddd');
});

test('it wraps character', () => {
  expect(caesarShift('zzz', 1)).toBe('aaa');
});

test('it shifts a capital letter to a capital letter', () => {
  expect(caesarShift('abC', 5)).toBe('fgH');
});

test('it do not shift special characters or numbers', () => {
  expect(caesarShift('5abC!', 5)).toBe('5fgH!');
});

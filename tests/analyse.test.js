import analyse from '../src/analyse';

test('it returns an object with the average,minimum, maximum and length of the array', () => {
  const object = analyse([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

/* eslint-env jest */
import analyse from '../src/analyse';
const object = analyse([1, 8, 3, 4, 2, 6]);
test('it returns an object with the average,minimum, maximum and length of the array', () => {
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

describe('Analyse an array', () => {
  it('the average', () => {
    expect(object.average).toEqual(4);
  });

  it('the minimum', () => {
    expect(object.min).toEqual(1);
  });

  it('the maximum', () => {
    expect(object.max).toEqual(8);
  });

  it('the length', () => {
    expect(object.length).toEqual(6);
  });
});

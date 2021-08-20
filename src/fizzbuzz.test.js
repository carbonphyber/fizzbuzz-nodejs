const { fizzbuzz } = require('./fizzbuzz');

describe('fizzbuzz', () => {
  test('is exported as a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });

  test.each([
    [
      'null',
      null,
    ],
    [
      'undefined',
      undefined,
    ],
    [
      'NaN',
      NaN,
    ],
    [
      'Infinity',
      Infinity,
    ],
  ])('throws Error when passed %p', ([passedStr, input]) => {
    expect(() => fizzbuzz(input)).toThrow();
  });

  test.each([
    [1, 1],
    [2, 2],
    ['fizz', 3],
    [4, 4],
    ['buzz', 5],
    ['fizz', 6],
    [7, 7],
    [8, 8],
    ['fizz', 9],
    ['buzz', 10],
    [11, 11],
    ['fizz', 12],
    [13, 13],
    [14, 14],
    ['fizzbuzz', 15],
  ])('returns %p when passed %p', (returns, input) => {
    expect(fizzbuzz(input)).toEqual(returns);
  });
});


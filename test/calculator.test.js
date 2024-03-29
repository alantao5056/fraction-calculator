const { addFraction, subtractFraction, multiplyFraction, divideFraction } = require('../src/calculator');

test('should add fraction: 3/4, 2/3 correctly', () => {
  expect(addFraction(
    {
      numerator: 3,
      denominator: 4
    }, {
      numerator: 2,
      denominator: 3
    })).toStrictEqual({
      wholeNumber: 1,
      numerator: 5,
      denominator: 12
    });
});

test('should subtract fraction: 1/2 - 1/3 correctly', () => {
  expect(subtractFraction(
    {
      numerator: 1,
      denominator: 2
    }, {
      numerator: 1,
      denominator: 3
    })).toStrictEqual({
      numerator: 1,
      denominator: 6
    });
});

test('should multiply fraction: 1/2 x 1/3 correctly', () => {
  expect(multiplyFraction(
    {
      numerator: 1,
      denominator: 2
    }, {
      numerator: 1,
      denominator: 3
    })).toStrictEqual({
      numerator: 1,
      denominator: 6
    });
});

test('should divide fraction: 1/2 / 1/3 correctly', () => {
  expect(divideFraction(
    {
      numerator: 1,
      denominator: 2
    }, {
      numerator: 1,
      denominator: 3
    })).toStrictEqual({
      wholeNumber: 1,
      numerator: 1,
      denominator: 2
    });
});
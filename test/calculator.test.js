const { addFraction } = require('../src/calculator');
const { subtractFraction } = require('../src/calculator');

test('should add fraction: 3/4, 2/3 correctly', () => {
  expect(addFraction(
    {
      numerator: 3,
      denominator: 4
    }, {
      numerator: 2,
      denominator: 3
    })).toStrictEqual({
      numerator: 17,
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
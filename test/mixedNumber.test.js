const mixedNumber = require('../src/mixedNumber');

test('should parse 2/1 correctly', () => {
  expect(mixedNumber({
    numerator: 2,
    denominator: 1
  })).toStrictEqual({
    wholeNumber: 2,
    numerator: 0,
    denominator: 0
  });
});
const simplify = require('../src/simplifier');

test('should simplify 3/12 correctly', () => {
  expect(simplify({
    numerator: 3,
    denominator: 12
  })).toStrictEqual({
    numerator: 1,
    denominator: 4
  });
});

test('should simplify 6/21', () => {
  expect(simplify({
    numerator: 6,
    denominator: 21
  })).toStrictEqual({
    numerator: 2,
    denominator: 7
  });
});

test('should simplify 24/40 correctly', () => {
  expect(simplify({
    numerator: 24,
    denominator: 40
  })).toStrictEqual({
    numerator: 3,
    denominator: 5
  });
});

test('should simplify 36/72 correctly', () => {
  expect(simplify({
    numerator: 36,
    denominator: 72
  })).toStrictEqual({
    numerator: 1,
    denominator: 2
  });
});
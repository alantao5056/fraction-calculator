const parser = require('../src/parser');

test('should parse 1/2 correctly', () => {
  const fraction = parser.parseFraction('1/2');
  expect(fraction.denominator).toBe(2);
  expect(fraction.numerator).toBe(1);
});

test('should parse 12/200 correctly', () => {
  const fraction = parser.parseFraction('12/200');
  expect(fraction.denominator).toBe(200);
  expect(fraction.numerator).toBe(12);
});

test('should parse 1/2+3/4 correctly', () => {
  const equation = parser.parseEquation('1/2+3/4');
  expect(equation.firstFraction).toBe('1/2');
  expect(equation.secondFraction).toBe('3/4');
  expect(equation.operator).toBe('+');
});

test('should parse 8/13÷1/2 correctly', () => {
  const equation = parser.parseEquation('8/13÷1/2');
  expect(equation.firstFraction).toBe('8/13');
  expect(equation.secondFraction).toBe('1/2');
  expect(equation.operator).toBe('÷');
});
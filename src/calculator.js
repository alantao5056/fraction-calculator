const simplify = require('./simplifier');
const mixedNumber = require('./mixedNumber');

const addFraction = function (fraction1, fraction2) {
  let result;
  if (fraction1.denominator === fraction2.denominator) {
    result = {
      numerator: fraction1.numerator + fraction2.numerator,
      denominator: fraction1.denominator
    };
  } else {
    result = {
      numerator: fraction2.denominator * fraction1.numerator + fraction1.denominator * fraction2.numerator,
      denominator: fraction1.denominator * fraction2.denominator
    };
  }
  return mixedNumber(simplify(result));
};

const subtractFraction = function (fraction1, fraction2) {
  let result;
  if (fraction1.denominator === fraction2.denominator) {
    result = {
      numerator: fraction1.numerator - fraction2.numerator,
      denominator: fraction1.denominator
    };
  } else {
    result = {
      numerator: fraction1.numerator * fraction2.denominator - fraction1.denominator * fraction2.numerator,
      denominator: fraction1.denominator * fraction2.denominator
    };
  }
  return mixedNumber(simplify(result));
};

const multiplyFraction = function (fraction1, fraction2) {
  let result = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return mixedNumber(simplify(result));
};

const divideFraction = function (fraction1, fraction2) {

}

module.exports = { addFraction, subtractFraction, multiplyFraction };
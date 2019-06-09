const simplifier = require('./simplifier');

const addFraction = function (fraction1, fraction2) {
  if (fraction1.denominator === fraction2.denominator) {
    const result = {
      numerator: fraction1.numerator + fraction2.numerator,
      denominator: fraction1.denominator
    };
    return simplifier.simplify(result);
  } else {
    const result = {
      numerator: fraction2.denominator * fraction1.numerator + fraction1.denominator * fraction2.numerator,
      denominator: fraction1.denominator * fraction2.denominator
    };
    return simplifier.simplify(result);
  }
}

module.exports = { addFraction };
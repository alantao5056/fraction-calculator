const getOperator = require('../src/getOperator');

const parseFraction = function (fractionString) {
  const slashIndex = fractionString.indexOf('/');
  const numerator = fractionString.substring(0, slashIndex);
  const denominator = fractionString.substring(slashIndex + 1, fractionString.length);
  return {
    numerator: parseInt(numerator),
    denominator: parseInt(denominator)
  };
};

const parseEquation = function (equationString) {
  const operator = getOperator.getOperator(equationString);
  const operatorIndex = equationString.indexOf(operator);
  const firstFraction = equationString.substring(0, operatorIndex);
  const secondFraction = equationString.substring(operatorIndex + 1, equationString.length);
  return {
    firstFraction: firstFraction,
    secondFraction: secondFraction,
    operator: operator
  };
};

module.exports = { parseFraction, parseEquation };
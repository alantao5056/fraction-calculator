const getOperator = function (equation) {
  let operator = '';
  if (equation.indexOf('-') != -1) {
    operator = '-';
  } else if (equation.indexOf('+') != -1) {
    operator = '+';
  } else if (equation.indexOf('x') != -1) {
    operator = 'x';
  }
  return operator;
};
module.exports = { getOperator };
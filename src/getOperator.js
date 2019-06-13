const getOperator = function (equation) {
  let operator = '';
  if (equation.indexOf('+') === -1) {
    operator = '-';
  } else {
    operator = '+';
  }
  return operator;
};
module.exports = { getOperator };
const { prompt } = require('enquirer');
const calculator = require('./calculator');
const parser = require('./parser');
const operator = require('./getOperator');
const mixedNumber = require('./mixedNumber').default;

const main = async function () {
  var equationString = await getInput(`What's your fraction equation?`);
  const equation = parser.parseEquation(equationString);
  const firstF = parser.parseFraction(equation.firstFraction);
  const secondF = parser.parseFraction(equation.secondFraction);
  let result;
  if (operator.getOperator(equation) === "+") {
    result = calculator.addFraction(firstF, secondF);
  } else if (operator.getOperator(equation) === "-") {
    result = calculator.subtractFraction(firstF, secondF);
  } else if (operator.getOperator(equation) === "x") {
    result = calculator.multiplyFraction(firstF, secondF);
  }
  result = mixedNumber.mixedNumber(result);

  console.log(`${equationString}=${result.numerator}/${result.denominator}`);
};

const getInput = async function (message) {
  let input = await prompt({
    type: 'input',
    name: 's',
    message
  });
  return input.s;
};

main().catch((error) => {
  console.log(error);
}).then(() => {
  process.exit();
});
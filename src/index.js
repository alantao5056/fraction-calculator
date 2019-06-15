const { prompt } = require('enquirer');
const calculator = require('./calculator');
const parser = require('./parser');
const mixedNumber = require('./mixedNumber');

const main = async function () {
  var equationString = await getInput(`What's your fraction equation?`);
  const equation = parser.parseEquation(equationString);
  const firstF = parser.parseFraction(equation.firstFraction);
  const secondF = parser.parseFraction(equation.secondFraction);
  let result;
  if (equation.operator === "+") {
    result = calculator.addFraction(firstF, secondF);
  } else if (equation.operator === "-") {
    result = calculator.subtractFraction(firstF, secondF);
  } else if (equation.operator === "x") {
    result = calculator.multiplyFraction(firstF, secondF);
  } else if (equation.operator === "÷") {
    result = calculator.divideFraction(firstF, secondF);
  }
  result = mixedNumber(result);

  if (result.wholeNumber === 0) {
    console.log(`${equationString} = ${result.numerator}/${result.denominator}`);
  } else {
    console.log(`${equationString} = ${result.wholeNumber} (${result.numerator}/${result.denominator})`);
  }
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
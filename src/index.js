const { prompt } = require('enquirer');
const calculator  = require('./calculator');

const main = async function() {
    var firstNumber = await getInput(`That's the first number?`);
    var secondNumber = await getInput(`That's the second number?`);
    const sum = calculator.add(parseFloat(firstNumber), parseFloat(secondNumber));
    console.log(`${firstNumber}+${secondNumber}=${sum}`);
};

const getInput = async function(message) {
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
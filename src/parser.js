const parseFraction = function(fractionString) {
    const slashIndex = fractionString.indexOf('/');
    const numerator = fractionString.substring(0, slashIndex);
    const denominator = fractionString.substring(slashIndex + 1, fractionString.length);
    return {
        numerator: parseInt(numerator),
        denominator: parseInt(denominator)
    };
};

const parseEquation = function(equationString) {

};

module.exports = { parseFraction, parseEquation };
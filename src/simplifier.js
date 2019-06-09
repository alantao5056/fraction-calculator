const simplify = function (fraction) {
    let fractionN = fraction.numerator;
    let fractionD = fraction.denominator;
    for (let i = 0; i < fraction.numerator; i++) {
        for (let i = 0; i < fraction.numerator; i++) {
            if (Math.floor(fractionN / (i + 1)) === fractionN / (i + 1) &&
                Math.floor(fractionD / (i + 1)) === fractionD / (i + 1)) {
                fractionN = fractionN / (i + 1);
                fractionD = fractionD / (i + 1);
            }
        }
    }
    return {
        numerator: fractionN,
        denominator: fractionD
    };
};

module.exports = { simplify };
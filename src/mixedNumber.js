const mixedNumber = function (fraction) {
  if (fraction.denominator < fraction.numerator) {
    const wholeNumber = Math.floor(fraction.numerator / fraction.denominator);
    const n = fraction.numerator % fraction.denominator;
    const d = fraction.denominator === 1 ? 0 : fraction.denominator;
    return {
      wholeNumber: wholeNumber,
      numerator: n,
      denominator: d
    };
  } else {
    return fraction;
  }
};

module.exports = mixedNumber;
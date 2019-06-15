const simplify = function (fraction) {
  let i = 2;
  let n = fraction.numerator;
  let d = fraction.denominator;
  let end = Math.min(n, d);
  while (i <= end) {
    if (n % i === 0 && d % i === 0) {
      n = n / i;
      d = d / i;
      end = Math.min(n, d);
    } else {
      i++;
    }
  }
  return {
    numerator: n,
    denominator: d
  }
};

module.exports = simplify;
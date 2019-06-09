const { addFraction } = require('../src/calculator');

test('should add fraction: 3/4, 2/3 correctly', () => {
    expect(addFraction(
        {
            numerator: 3,
            denominator: 4
        }, {
            numerator: 2,
            denominator: 3
        })).toStrictEqual({
            numerator: 17,
            denominator: 12
        });
});
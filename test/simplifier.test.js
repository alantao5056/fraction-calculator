const { simplify } = require('../src/simplifier');

test('should simplify 46/34 correctly', () => {
    expect(simplify({
        numerator: 46,
        denominator: 34
    })).toStrictEqual({
        numerator: 23,
        denominator: 17
    });
});

test('should return 1/5', () => {
    expect(simplify({
        numerator: 1,
        denominator: 5
    })).toStrictEqual({
        numerator: 1,
        denominator: 5
    });
});

test('should simplify 24/12 correctly', () => {
    expect(simplify({
        numerator: 24,
        denominator: 12
    })).toStrictEqual({
        numerator: 2,
        denominator: 1
    });
});

test('should simplify 4/8 correctly', () => {
    expect(simplify({
        numerator: 4,
        denominator: 8
    })).toStrictEqual({
        numerator: 1,
        denominator: 2
    });
});
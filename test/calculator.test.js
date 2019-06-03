const calculator = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('adds 2 + 3 to eual 5', () => {
    const sum = calculator.add(2, 3);
    expect(sum).toBe(5);
});
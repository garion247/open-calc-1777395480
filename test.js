const calc = require('./calculator');

// Test divide function
console.log('--- divide tests ---');
console.assert(calc.divide(10, 2) === 5, 'divide(10, 2) should equal 5');
console.assert(calc.divide(7, 2) === 3.5, 'divide(7, 2) should equal 3.5');
console.assert(calc.divide(0, 5) === 0, 'divide(0, 5) should equal 0');
console.assert(calc.divide(-10, 2) === -5, 'divide(-10, 2) should equal -5');

// Test division by zero
try {
    calc.divide(5, 0);
    console.assert(false, 'Should have thrown an error for division by zero');
} catch (e) {
    console.assert(e.message === 'Division by zero is not allowed', 'Error message should match');
}

// Verify existing functions still work
console.log('--- regression tests ---');
console.assert(calc.add(2, 3) === 5, 'add should still work');
console.assert(calc.subtract(5, 3) === 2, 'subtract should still work');
console.assert(calc.multiply(4, 3) === 12, 'multiply should still work');

console.log('All tests passed!');

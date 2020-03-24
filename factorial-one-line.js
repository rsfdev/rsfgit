const assert = require('assert');

const factorial = (n) => {
  if (n === 0) return 1;
  
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

assert.strictEqual(factorial(4), 24);
assert.strictEqual(factorial(3), 6);
assert.strictEqual(factorial(2), 2);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(0), 1);

// using recursion, ? case true, : case false
const factorialr = (n) => (n === 0) ? 1 : n * factorialr(n - 1);

assert.strictEqual(factorialr(4), 24);
assert.strictEqual(factorialr(3), 6);
assert.strictEqual(factorialr(2), 2);
assert.strictEqual(factorialr(1), 1);
assert.strictEqual(factorialr(0), 1);

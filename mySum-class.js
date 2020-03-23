const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

assert.strictEqual(mySum([1, 2, 3, 4]), 10); // OK
assert.strictEqual(mySum([1, -2, -3, 4]), 0); // OK
// assert.strictEqual(mySum([1, -2, -3, 4, 55, 34, 56, 155]), 0); // AssertionError [ERR_ASSERTION]: 300 === 0

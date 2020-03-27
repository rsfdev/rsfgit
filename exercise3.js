const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

assert.strictEqual(typeof mySum, 'function');
assert.equal(mySum([1, 2, 3, 4]), 10);
assert.equal(mySum([1, -2, -3, 4]), 0);
assert.equal(mySum([1, 3, -5 , 7, -9, 11]), 8);
assert.equal(mySum([]), 0);

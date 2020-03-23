const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.deepStrictEqual(myFizzBuzz(15)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
// assert.deepStrictEqual(myFizzBuzz(9)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
// assert.deepStrictEqual(myFizzBuzz(25)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
// assert.deepStrictEqual(myFizzBuzz(41)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
assert.deepStrictEqual(myFizzBuzz('40')); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
console.log(myRemoveWithoutCopy);
  return arr;
}
console.log('myRemoveWithoutCopy');

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3)); // AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined

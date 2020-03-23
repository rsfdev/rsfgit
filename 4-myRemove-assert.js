const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// assert.deepEqual(myRemove([1, 2, 3, 4], 3)); //AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] deepEqual undefined
assert.deepEqual(myRemove([1, 2, 3, 4], 5)); //AssertionError [ERR_ASSERTION]: [ 1, 2, 3, 4 ] deepEqual undefined

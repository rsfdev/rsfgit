const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(arr);
  return newArr;
}

assert.deepEqual(myRemove([1, 2, 3, 4], 3));
assert.deepEqual(myRemove([1, 2, 3, 4], 2));
assert.deepEqual(myRemove([1, 2, 3, 4], 5));

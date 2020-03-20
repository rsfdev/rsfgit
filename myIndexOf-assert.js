const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

assert.deepEqual(myIndexOf([1, 2, 3, 4], 3)); // OK
assert.deepEqual(myIndexOf([1, 2, 3, 4], 5)); // OK

// assert.throws(() => { sum(4, '5'); }, /^Error: parameter y must not be 0$/); // OK

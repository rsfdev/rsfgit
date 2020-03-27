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

const myList = [1, 2, 3, 4];

assert.strictEqual(typeof myIndexOf, 'function');
assert.strictEqual(myIndexOf(myList, 3), 2);
assert.strictEqual(myIndexOf(myList, 5), -1);

const assert = require('assert');

function addOne(myArray) {
  let newArr = [];
  for (let i = 0; i < myArray.length; i += 1) {
    if (myArray[i] == unchanged[i]) {
      newArr.push(myArray[i]+1);
    }
  }
  return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);

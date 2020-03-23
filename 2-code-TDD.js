const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

function wordLengths(words) {
  let newArr = [];
  for (let i = 0; i < myArray.length; i += 1) {
    if (myArray[i] == unchanged[i]) {
      newArr.push(myArray[i]+1);
    }
  }
  return newArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);

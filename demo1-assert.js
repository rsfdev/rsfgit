const assert = require('assert');

function add(x, y) {
  return x + y;
}

const expected = add(9, 3);

assert(expected === 12, '9 plus 3 equals to 12');
assert.ok(expected === 12, 'Error');
assert.equal(expected, 12, 'Error');
assert.notEqual(expected, 12, 'Error');

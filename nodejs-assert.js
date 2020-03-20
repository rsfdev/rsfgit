// const assert = require('assert');

// assert.equal(50, 50); // OK
// assert.equal(50, 70); // AssertionError: 50 == 70

const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, 3, 'Mensagem customizada do erro');

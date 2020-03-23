// Implemente uma função `sum1ToX(num)` que recebe um número inteiro
// e retorna o valor do somatório de 1 até o número recebido.

// Por exemplo:

// - `sum1ToX(1)` retorna 1: de 1 até 1 = 1
// - `sum1ToX(3)` retorna 6: de 1 até 3 = 1 + 2 + 3 = 6
// - `sum1ToX(5)` retorna 15: de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15

const assert = require('assert');

const sum1ToX = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

assert.strictEqual(typeof(sum1ToX), 'function');
assert.strictEqual(sum1ToX(1), 1);
assert.strictEqual(sum1ToX(3), 6);
assert.strictEqual(sum1ToX(5), 15);
assert.strictEqual(sum1ToX(7), 28);
assert.strictEqual(sum1ToX(0), 0);
assert.strictEqual(sum1ToX(-1), 0);
assert.strictEqual(sum1ToX('foo'), 0);




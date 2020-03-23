// Implemente a função `fibonacci(num)` que retorna uma lista contendo a
// sequência de Fibonacci referente ao número `num`.

// Basicamente a sequência é definida pela fórmula:


// F(n) = F(n - 1) + F(n - 2)
// F(1) = 1
// F(0) = 0


// Os primeiros números da sequência são: `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...`

// Ou seja, as chamadas devem seguir a ordem:

// - fibonacci(0) retorna `0`
// - fibonacci(1) retorna `1`
// - fibonacci(2) retorna `1`
// - fibonacci(3) retorna `2`
// - fibonacci(4) retorna `3`

const assert = require('assert');

const fibonacci = (num) => {
  const arr = [0, 1];

  for (let n = 2; n <= num; n++) {
    arr.push(arr[n - 1] + arr[n - 2]);
  }

  return arr[num];
}

assert.strictEqual(typeof(fibonacci), 'function');
assert.strictEqual(fibonacci(0), 0);
assert.strictEqual(fibonacci(1), 1);
assert.strictEqual(fibonacci(2), 1);
assert.strictEqual(fibonacci(3), 2);
assert.strictEqual(fibonacci(4), 3);
assert.strictEqual(fibonacci(5), 5);
assert.strictEqual(fibonacci(6), 8);
assert.strictEqual(fibonacci(7), 13);

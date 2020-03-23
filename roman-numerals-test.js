const convertToRoman = require('./roman-numerals');
const assert = require('assert');

assert.strictEqual(typeof convertToRoman, 'function');
assert.strictEqual(convertToRoman(1), 'I');
assert.strictEqual(convertToRoman(2), 'II');
assert.strictEqual(convertToRoman(3), 'III');
assert.strictEqual(convertToRoman(4), 'IIII');

assert.strictEqual(convertToRoman(5), 'V');
assert.strictEqual(convertToRoman(6), 'VI');
assert.strictEqual(convertToRoman(7), 'VII');
assert.strictEqual(convertToRoman(8), 'VIII');
assert.strictEqual(convertToRoman(9), 'VIIII');

assert.strictEqual(convertToRoman(10), 'X');
assert.strictEqual(convertToRoman(11), 'XI');
assert.strictEqual(convertToRoman(12), 'XII');
assert.strictEqual(convertToRoman(13), 'XIII');
assert.strictEqual(convertToRoman(14), 'XIIII');
assert.strictEqual(convertToRoman(15), 'XV');
assert.strictEqual(convertToRoman(26), 'XXVI');
assert.strictEqual(convertToRoman(37), 'XXXVII');
assert.strictEqual(convertToRoman(43), 'XXXXIII');

assert.strictEqual(convertToRoman(50), 'L');
assert.strictEqual(convertToRoman(55), 'LV');
assert.strictEqual(convertToRoman(67), 'LXVII');
assert.strictEqual(convertToRoman(78), 'LXXVIII');

assert.strictEqual(convertToRoman(100), 'C');
assert.strictEqual(convertToRoman(200), 'CC');
assert.strictEqual(convertToRoman(278), 'CCLXXVIII');

assert.strictEqual(convertToRoman(500), 'D');
assert.strictEqual(convertToRoman(778), 'DCCLXXVIII');


assert.strictEqual(convertToRoman(1000), 'M');
assert.strictEqual(convertToRoman(3000), 'MMM');
assert.strictEqual(convertToRoman(2778), 'MMDCCLXXVIII');

// O problema de hoje é o de converter números inteiros pra números romanos! Nos primeiros dias dos números romanos, a sua notação era mais simples do que a que conhecemos hoje:
// 1 I
// 5 V
// 10 X
// 50 L
// 100 C
// 500 D
// 1000 M
// Números intermediários (entre 1 e 5, 5 e 10, etc) eram formados por simples adição: por exemplo, a notação do número 4 era IIII. Assim sendo, a primeira parte do nosso problema é essa: dado um número inteiro entre 0 e 3000, converta-o para a notação de números romanos antiga!
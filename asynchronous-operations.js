// const assert = require('assert');

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// assert.deepEqual(numbers, [1, 2, 3]);


// const assert1 = require('assert');

// const pushNumber1 = (list, number) => list.push(number);

// let numbers1 = [];

// setTimeout(() => pushNumber1(numbers1, 1), 3000);
// pushNumber1(numbers1, 2);
// pushNumber1(numbers1, 3);

// assert1.deepEqual(numbers1, [1, 2, 3]); // this validation fails


const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepEqual(numbers, [2, 3, 1]), 3000);

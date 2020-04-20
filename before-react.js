// The value of the "this" keyword inside a regular function depends on "how" the function was "called".
// The value of the "this" keyword inside an arrow function depends on "where" the function was "defined".

// jsdrops.com/arrow-functions

this.whoIsThis = 'TOP'; // Identify this scope

// 1) Defining
const fancyObj {
  whoIsThis: 'FANCY', // Identify this object
  regularF: function () {
    console.log('regularF', this.whoIsThis);
  },
  arrowF: () => {
    console.log('arrowF', this.whoIsThis);
  },
};

// 2) Calling
console.log('TOP-LEVEL', this.whoIsThis); // It's "TOP" here

fancyObj.regularF(); // Output #1 (Fancy)
fancyObj.arrowF();   // Output #2 (Top)

fancyObj.regularF.call({whoIsThis: 'FAKE'}); // Output #3 (Fake)
fancyObj.arrowF.call({whoIsThis: 'FAKE'});   // Output #4 (Top)


const square = (a) => {
  return a * a;
};

// make it more concise
const square = (a) => a * a; 'or' const square = a => a * a;
console.log([1, 2, 3, 4].map(a => a * a));


// rest syntax
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(restOfItems);

// spread syntax. It replaces the need to use the Object.assign method.
const array2 = [newItem0, ...array1, newItem1, newItem2];
const object2 = {
  ...object2,
  newP1: 1,
  newP2: 2,
};

const engine = { href: "http://google.com", src: "google.png" };
<Y {...engine} />
<Y href={engine.href} src={engine.src} />

// Modern features in object literals
const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;
const obj = {
  p1: 10,        // Plain old object property (don't abbreviate)
  f1() {},       // Define a shorthand function property
  InverseOfPI,   // Define a shorthand regular property
  f2: () => {},  // Define an arrow function property
  [mystery]: 42, // Define a dynamic property
};

const obj = {
  InverseOfPI: InverseOfPI,
};

// Interview question

const mystery = 'answer';

const obj = {
  [mystery1]: 42,
};
console.log(obj.mystery); // undefined
console.log(obj.answer); // 42

// promises and async/await
const fetchData = () => {
  fetch('https://api.github.com').then(resp => {
    resp.json().then(data => {
      console.log(data);
    });
  });
};

// modern way
const fetchData = async () => {
  const resp = await fetch('https://api.github.com');
  const data = await resp.json();
  console.log(data);
};

// For error-handling (when promises reject, for example)
// you can combine the async/await syntax with the plain-old
// try/catch statement (and you should do that all the time).

// Map, filter, and reduce
// All of these methods work on an original array and receive a callback function as an argument.
// They invoke the callback function per item in the original array and do something with that callback’s return value.
// The best way to understand them is through examples.


[4, 2, 0].map(e => e * e);
// Result: [16, 4, 0]

[4, 7, 2, 5, 0, 11].filter(e => e % 2 === 0)
// Result: [4, 2, 0]

[16, 4, 0].reduce((acc, curr) => acc + curr, 0);
// Result: 20
// Initial value of acc = 0
// First run: acc = 0, curr = 16
//   New acc = 0 + 16 = 16
// Second run: acc = 16, curr = 4
//   New acc = 16 + 4 = 20
// Third run: acc = 20, curr = 0
//   New acc = 20 + 0 = 20
// Final value of acc = 20

[4, 7, 2, 5, 0, 11]
  .filter(e => e%2 === 0)
  .map(e => e * e)
  .reduce((acc, curr) => acc + curr, 0);
// Result: 20


// Conditional expressions

<div>
  {condition ? valueX : valueY}
</div>

<div>
  {condition ? <input /> : <img />}
</div>

// The short-circuit evaluation
<div>
  {condition && <input />}
</div>
// If condition is true, the second operand will be returned.
// If it’s false React will ignore it.
// This means it will either render an input element or nothing at all.
// This JavaScript trick is known as the "short-circuit evaluation".


// Timeouts and intervals
// This code will print the “Hello Timeout!” message after 3 seconds:
setTimeout(() => {
  console.log('Hello Timeout!');
}, 3000);

// This code will print the “Hello Interval!” message each 3 seconds, forever:
setInterval(() => {
  console.log('Hello Interval!');
}, 3000);

// You can use a clearTimeout(id) call to stop a timeout object and clearInterval(id) to stop an interval object.

// This code will print the “Hello Interval!” message each 3 seconds but only for 3 times:
let count = 0;
const intervalId = setInterval(() => {
  count = count + 1
  console.log('Hello Interval!');
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 3000);

// or:
let count = 0;
const intervalId = setInterval(() => {
  count = count + 1
  console.log('Hello Interval!');
  count === 3 ? clearInterval(intervalId) : false
}, 3000);








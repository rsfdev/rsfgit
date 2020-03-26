const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

// It will return the first element when the function's return is true.
const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Another way to do it without the need to create a new function.
const isEven2 = numbers.find((number2) => number2 % 2 === 0);

console.log(isEven2); // 30

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


const getSum1 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers1 = numbers.reduce(getSum1, 0); // 0 added to reduce as parameter. If this parameter is 10, the result will be 123.
console.log(sumNumbers1); // 113

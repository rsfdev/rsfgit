const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((acc, number) => acc + number); // acc receives from reduce the return of function for each iteration.
console.log(sumNumbers);

// that is:

const getSum = (result, number) => result + number;
const sumNumbers1 = numbers.reduce(getSum);
console.log(sumNumbers1);

// for a better understanding:

const getSum1 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers.reduce(getSum1);
console.log(sumNumbers2); // 113


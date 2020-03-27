const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers);
console.log(numbers);

// using "for"
const negativeNumbers1 = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers1.push(numbers[i] * -1);
  } else {
    negativeNumbers1.push(numbers[i]);
  }
}

console.log(negativeNumbers1);
console.log(numbers);

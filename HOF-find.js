const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

console.log(firstMultipleOf5);

const numbers1 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf51 = numbers1.find(n1 => n1 % 5 === 0);

console.log(firstMultipleOf51);

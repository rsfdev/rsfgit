const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // The variable accumulates with each iteration of for.
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers);

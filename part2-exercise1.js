const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i += 1) {
      result *= i
  }

  return result
}

console.log(factorial(5))

// recursive
const factorialr = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorialr(5))

const factorialr1 = number => number > 1 ? factorial(number) : 1

console.log(factorialr1(5))
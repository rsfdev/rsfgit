const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({length: 10}, () =>  Math.floor(Math.random() * 50))
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0)
    console.log(myArray)

    sum < 8000 ? resolve(sum) : reject()
  })

  myPromise.then(sum => [2, 3, 5, 10].map(number => sum/number))
           .then(array => array.reduce((number, acc) => number + acc, 0))
           .catch(() => console.log("It's more than eight thousand! That promise must be broken!"))
}

fetchPromise()

// refactoring
const sumRandomNumbers = () => {
  const myArray = Array.from({length: 10}, () =>  Math.floor(Math.random() * 50))
  const sum = myArray.map(number => number * number)
                     .reduce((number, acc) => number + acc, 0)

  if (sum > 8000) throw new Error()
  return sum
}

const generateArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum/number)

const fetchPromiseR = async () => {
try {
  const sum = await sumRandomNumbers()
  const array = await generateArrayFromSum(sum)

  console.log(array)
} catch(e) {
  console.log("It's more than eight thousand! That promise must be broken!")
  }
}

fetchPromiseR()

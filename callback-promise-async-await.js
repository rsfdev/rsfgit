const fs = require('fs')

console.log(1)

// calback
// fs.readFile('./in1.txt', (err, contents) => {
//   console.log(4) // being executed before reading files in1 and in2
//   fs.readFile('./in2.txt', (err2, contents2) => {
//     console.log(err, String(contents))
//     console.log(err2, String(contents2))
//   })
// })

// promise
const readFile = file => new Promise( (resolve, reject) => {
  fs.readFile(file, (err, contents) => {
    if (err) {
      reject(err)
    } else {
      resolve(contents)
    }
  })
})

// promise
// readFile('./in1.txt')
// .then( contents => {
//   console.log(String(contents))
//   return readFile('./in2.txt')
// })
// .then( contents => {
//   console.log(String(contents))
// })

// async/await - syntactic sugar over promise

const init = async() => {
  try {
  const contents = await readFile('./in1.txt')
  const contents2 = await readFile('./in2.txt')
  return String(contents) + '\n' + String(contents2)
  // console.log(String(contents))
  // console.log(String(contents2))
  } catch (errTc) {
    console.log(errTc)
  }
}
init()
  .then( contentResult => console.log(contentResult) )

console.log(2)

console.log(3)

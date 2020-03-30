const person = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality } = person
console.log(nationality); // undefined


const person1 = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality1 = "Brazilian" } = person1
console.log(nationality1) // Brazilian

// array destructuring
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0


const nationality2 = ({ firstName, nationality2 = "Brazilian" }) => `${firstName} is ${nationality2}`

const person2 = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality2: "Russian"
}

console.log(nationality2(otherPerson)) // Ivan is Russian
console.log(nationality2(person2))

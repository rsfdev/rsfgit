const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (n1) => n1 % 2 === 0;

// It will return all the elements when the function's return is true.
const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Another way to do it without the need to create a new function.
const isEven2 = numbers.filter((n2) => n2 % 2 === 0);

console.log(isEven2); // [ 30, 22 ]


const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]


const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filters all students who do not have the name 'Ricardo' and returns the array with them. In practice, that is, it removes Ricardo from the array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents);

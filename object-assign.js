const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Mary', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

const person1 = {
  name: 'Robert',
};

const lastName = {
  lastName: 'Andrew',
};

const clone = Object.assign(person1, lastName);

console.log(clone); // { name: 'Robert', lastName: 'Andrew' }
console.log(person1); // { name: 'Robert', lastName: 'Andrew' }

clone.name = 'Mary';

// Changing the name property through the clone object'
console.log(clone); // Output: { name: 'Mary', lastName: 'Andrew' }
console.log(person1); // Output: { name: 'Mary', lastName: 'Andrew' }

person1.lastName = 'Eastwood';

// Changing the lastname property through the person object'
console.log(clone); // Output: { name: 'Mary', lastName: 'Eastwood' }
console.log(person1); // Output: { name: 'Mary', lastName: 'Eastwood' }

const person2 = {
  name:'Peter',
};

const lastName2 = {
  lastName: 'Cruise',
};

const newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Andy';
person2.lastName3 = 'Hawkins';
console.log(newPerson);
console.log(person2);

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// forEach structure
// arrayOfValues.forEach((element) => {
//   console.log('Cada elemento do array:', element);
// });

const arrayOfValues1 = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues1 = arrayOfValues1.forEach((element1, indexOfTheArray2, theEntireArray) => {
  console.log('Cada elemento do array:', element1);
  console.log('Index, posição do elemento:', indexOfTheArray2);
  console.log('Array percorrido:', theEntireArray);
});

// The arrow function to forEach is composed by element, index and array as parameters:
// element - Value of each position of array;
// index - Index starting to 0;
// array - Original array being traversed.

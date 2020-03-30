// spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr, 90); // returns 89

console.log(maximus);
console.log(arr);

// rest parameter
function fun(...input){ 
  let sum = 0; 
  for(let i of input){ 
      sum += i; 
  } 
  return sum; 
} 
console.log(fun(1,2));
console.log(fun(1,2,3));
console.log(fun(1,2,3,4,5));


function fun1(a, b, ...c){ 
  console.log(`${a} ${b}`); //Mukul Latiyan 
  console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
  console.log(c[0]); //Lionel 
  console.log(c.length); //3 
  console.log(c.indexOf('Barcelona')); //0 
} 
fun1('Mukul','Latiyan','Lionel','Messi','Barcelona');


let name = 0;
let age = 1;
let challenge = 2;

let array = ['Roger', 46, {name: 'world'}];

console.log(array[name]);
console.log(array[2].name);

let array1 = ['Roger', 46, ['world', ['world1']]];

console.log(array1[challenge]);
console.log(array1[challenge][0]);
console.log(array1[2][1][0]);

let last = array1[(array1.length-1)];
console.log(last);

array1.forEach(function (item, indice, array) {
    console.log(item, indice);
})

let addLast = array1.push('trybe');
console.log(array1);

let removeLast = array1.pop();
console.log(array1);

let addFirst = array1.unshift('trybe');
console.log(array1);

let removeFirst = array1.shift();
console.log(array1);


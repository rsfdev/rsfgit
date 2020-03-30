function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People');
hello();

console.log('-----------------------------------1');
// passing undefined
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

console.log('-----------------------------------2');
// passing null
function say1 (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say1('Hey', 'People');
say1(null, 'People');
say1('Hi', null);
say1(null, null);

console.log('-----------------------------------3');
// passing 0
function say2 (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say2('Hey', 'People');
say2(0, );
say2('Hi', 0);
say2(0, 0);

console.log('-----------------------------------4');
// evaluated at function execution time
function add (value, list = []) {
  list.push(value);
  return list;
}

console.log(add('test'));
console.log(add('test2'));

console.log('-----------------------------------5');
// using function
function getList () {
  return [];
}

function add (value, list = getList()) {
  list.push(value);
  return list;
}

console.log(add('test'));
console.log(add('test2'));

console.log('-----------------------------------6');
// using parameters
function foo (x, y = x+1, z = x+y) {
  return [x, y, z];
}

console.log(foo(2));
console.log(foo(2, 20));


console.log('-----------------------------------7');
// defining an empty callback
function ajax (url, cb = function () {}) {
  // ...
}

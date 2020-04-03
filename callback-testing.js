// function first(){
//   setTimeout( function(){
//   console.log(1);
// }, 500 );
// }
// function second(){
//   console.log(2);
// }
// first();
// second();

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

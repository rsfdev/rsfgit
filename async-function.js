async function myRide() {
  return '2017 Dodge Charger';
}

// and a different function that does the same thing but in promise format:
function yourRide() {
  return Promise.resolve('2017 Dodge Charger');
}

function foo() {
  return Promise.reject(25)
}

// is equal to
async function() {
  throw 25;
}
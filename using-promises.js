const weather = true
const date = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
    console.log(dateDetails);
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});
console.log(date);

const myDate = function() {
  date
    .then(function(done) {
      console.log('We are going on a date!')
      console.log(done)
    })
    .catch(function(error) {
        console.log(error.message)
    })
}

myDate();
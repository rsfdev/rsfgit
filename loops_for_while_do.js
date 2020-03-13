
//loops:
// 1. For
// 2. While
// 3. Do...While
// 4. For...In
// 5. For...Of

for (let i = 0; i < 5; i++) {
    //const element = array[index];
    console.log("I'm learning", i)
}

for (let i = 0; i < 5; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

var cars = ["Saab", "Volvo", "BMW"];
//var i;
for (i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

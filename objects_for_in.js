/*
let car = {
    plate: 'AXA-1223',
    model: 'Hatch',
    parts: {
        transmission: 'Automatic',
        fuel: 'flex'
    },
    "other-thing": "testing"
};

console.log(car.plate);
console.log(car.parts.fuel);
console.log(car["other-thing"]);
*/

let information = {
    character: "Margarida",
    origin: "Pato Donald",
    grade: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recurrent: "yes",
  };

console.log('Welcome, ', information.character);
console.log(information);


for (let index in information) {
    console.log(index);
};

for (let index in information) {
    console.log(information[index]);
};

let information1 = {
    character: "Tio Patinhas",
    origin: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    grade: "O último MacPatinhas",
    recurrent: "yes",
  };

  for (let index in information&information1) {
    console.log(information&information1[index]);
};



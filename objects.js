
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

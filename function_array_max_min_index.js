
let Array = [2, 3, 6, 7, 10, 1];

function getMaxArray(array) {
    return Math.max.apply(Math, array);

};

console.log(Array.indexOf(getMaxArray[1]));
console.log(getMaxArray(Array));

function getMinArray(array) {
    return Math.min.apply(Math, array);
};

console.log(Array.indexOf(getMinArray[1]));
console.log(getMinArray(Array));
